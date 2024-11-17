import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/module/user/service/user.service';
import * as bcrypt from 'bcrypt';
import { iAuthTokenInfo } from '../interface/auth.interface';
import { HashService } from 'src/utils/hashing/hash.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly hashService: HashService,
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async getAuthToken(userInfo: iAuthTokenInfo) {
        const accessTokenExpireIn = process.env.JWT_EXPIRES_IN || '60s';
        const jwtSecretKey = process.env.JWT_SECRET || 'JatinGupta';

        const accessToken = this.jwtService.sign(
            {
                type: 'accessToken',
                username: userInfo.username,
            },
            {
                expiresIn: accessTokenExpireIn,
                secret: jwtSecretKey,
            },
        );

        return {
            accessToken,
            tokenType: 'Bearer',
        };
    }

    async validateJwt(token: string): Promise<any> {
        try {
            return await this.jwtService.verifyAsync(token);
        } catch (err) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }

    async setTokenInHeader(res: any, accessToken: string) {
        res.set({ 'x-access-token': accessToken });
    }

    async comparePasswords(password: string, hash: string) {
        const isMatched = await this.hashService.comparePassword(
            password,
            hash,
        );
        if (!isMatched) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return isMatched;
    }
}
