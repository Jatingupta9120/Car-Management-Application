import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UserModule } from '../user/user.module';
import { JWTModule } from 'src/utils/jwtService/jwt.module';
import { HashModule } from 'src/utils/hashing/hash.module';

@Module({
    imports: [
        JWTModule,
        UserModule,
        HashModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET || 'jatingupta',
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
