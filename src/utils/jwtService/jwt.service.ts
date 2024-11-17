import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtSignOptions, JwtService as NestJwtService } from '@nestjs/jwt';
@Injectable()
export class JwtService {
    constructor(
        private readonly jwtService: NestJwtService,
    ) {}
    sign(payload: any, options?: JwtSignOptions): string {
        return this.jwtService.sign(payload, options);
    }

    verify(token: string, options?: JwtSignOptions): any {
        try {
            return this.jwtService.verify(token, options);
        } catch (err) {
            return null;
        }
    }

    decode(token: string): any {
        try {
            return this.jwtService.decode(token);
        } catch (err) {
            return null;
        }
    }

    validateJwt(token: string) {
        try {
            return this.jwtService.verify(token);
        } catch (err: any) {
            const errorMessage = err.message;
            if (errorMessage == 'jwt expired') {
                // throw new Error(errorName.AUTH_ACCESS_TOKEN_EXPIRE);
            } else {
                // throw new Error(errorName.AUTH_INVALID_ACCESS_TOKEN);
            }
        }
    }
}
