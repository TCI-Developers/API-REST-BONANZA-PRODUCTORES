import { Injectable, NotFoundException } from '@nestjs/common';
import { QuickbaseClient } from 'src/integrations/quickbase/quickbase.client';
import { QuickbaseMapper } from 'src/shared/mappers/quickbase.mapper';
import { USER_FIELD_MAP } from './user.map';
import { User } from './interfaces/user.interface';
import { UserDTO } from './dto/user.dto';


//export type User = any;

@Injectable()
export class UsersService {

    private tableId = process.env.QB_TABLE_USUARIOS;

    
    constructor( private readonly qb: QuickbaseClient, private readonly mapper: QuickbaseMapper){}


    async findOne(username: string): Promise<UserDTO | undefined> {

        const response = await this.qb.query( this.tableId!,{
            select: Object.keys(USER_FIELD_MAP).map(Number),
            where: `{31.EX.'${username}'}`,
        });

        const user = this.mapper.toDomain<UserDTO>(
            response,
            USER_FIELD_MAP,
        );

        if (user.length === 0) {
            throw new NotFoundException('Usuario no encontrado');
        }

    return user[0];


     //   return this.users.find(user => user.username === username);
    }
}
