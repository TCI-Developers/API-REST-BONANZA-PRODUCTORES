import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private  userService: UsersService, private jwtService: JwtService) {}

    async signIn(user_name : string, pass: string ): Promise<{access_token: string}>{
        
        const user = await this.userService.findOne(user_name);
         if ( user?.password !== pass ) {
            throw new UnauthorizedException();
         }

         const playload = { id: user.userId, username: user.username };

         return {
            access_token: await this.jwtService.signAsync(playload),
         };

    }
}
