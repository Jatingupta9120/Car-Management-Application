import { Body, Controller, Post, HttpCode, HttpStatus, Res, Req } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { iAuthTokenInfo } from '../interface/auth.interface';
import { UserService } from 'src/module/user/service/user.service';
import { MyRequest } from '../interface/my_request.interface';
import { LoginCredentialsDTO } from 'src/module/user/dto/create_user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly userService:UserService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(
        @Body() loginCredentials: LoginCredentialsDTO,
        @Res({ passthrough: true }) res: Response,
        @Req() req: MyRequest,
    ) {
      
        const user = await this.userService.getUSerByUsername(
            loginCredentials.userName
        );

        if (!user) {
            throw new Error('Invalid username or password');
        }

        await this.authService.comparePasswords(
            loginCredentials.password,
            user.password,
        );

        const authTokenInfo: iAuthTokenInfo = {
            username: user.username,
            id: user.id
        };

        const tokens = await this.authService.getAuthToken(authTokenInfo);
        await this.authService.setTokenInHeader(res, tokens.accessToken);

        return {
            userId: user.id,
            userName: user.username,
        };
    }
}
