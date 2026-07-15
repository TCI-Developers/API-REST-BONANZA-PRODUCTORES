// integrations/quickbase/quickbase.client.ts
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { async, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { pathToFileURL } from 'url';

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

    try {

      const res = await firstValueFrom(
      this.http.post(url, { ...body, from: tableId }, { headers: this.headers() }),); 

      return res.data;

      
    } catch (error: unknown) {
    
      if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500;
      const data = error.response?.data;

      throw new HttpException(
        {
          statusCode: status,
          error: 'TCI Error',
          details: data?.description,
          timestamp: new Date().toISOString(),        
        },
        status,
      );
    }

    throw new InternalServerErrorException();
  }
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