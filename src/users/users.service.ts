import { Injectable } from '@nestjs/common';
//import { User } from './interfaces/user.interface';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'Bonanza',
            password: '8oNaN54_XLoiuhbx',
        },
        {
            userId: 2,
            username: 'Developer',
            password: 'd38l0p3r_Hpaxvz',
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
