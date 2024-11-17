import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'jatingupta',
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [JwtService],
    exports: [JwtService],
})
export class JWTModule {}
