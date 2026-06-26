// integrations/quickbase/quickbase.client.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QuickbaseClient {
 

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
   
  }

  private headers() {
    return {
       'QB-Realm-Hostname': process.env.QUICKBASE_REALM,
       'Authorization': `QB-USER-TOKEN ${process.env.QUICKBASE_TOKEN}`,
       'Content-Type': 'application/json',
    };
  }

  async query(tableId: string, body: any) {
    const url = `https://api.quickbase.com/v1/records/query`;

    const res = await firstValueFrom(
      this.http.post(url, { ...body, from: tableId }, { headers: this.headers() }),
    );

    return res.data;
  }

  async createRecord(tableId: string, data: any) {
    const url = `https://api.quickbase.com/v1/records`;

    const res = await firstValueFrom(
      this.http.post(url, { to: tableId, data }, { headers: this.headers() }),
    );

    return res.data;
  }

  async updateRecord(tableId: string, data: any) {
    const url = `https://api.quickbase.com/v1/records`;

    const res = await firstValueFrom(
      this.http.post(url, { to: tableId, data }, { headers: this.headers() }),
    );

    return res.data;
  }
}