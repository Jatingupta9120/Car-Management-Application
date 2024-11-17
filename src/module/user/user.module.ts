import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';
import { JWTModule } from 'src/utils/jwtService/jwt.module';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [JWTModule],
    controllers: [UserController],
    providers: [UserService, UserRepository,JwtService],
    exports: [UserService, UserRepository],
})
export class UserModule {}
