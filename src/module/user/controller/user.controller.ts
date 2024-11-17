import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { userresponseName } from 'src/constants/response/user/user_response.constants';
import { responseName } from '../../../constants/response';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { CreateUserDTO, GetUserPathParams } from '../dto/create_user.dto';
import { login } from '../interface/user.interface';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
@Controller()
export class UserController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private userRepository: UserRepository,
    ) {}

    @Post('signUp')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: CreateUserDTO })
    @ResponseCustom(userresponseName.USER_CREATED)
    @ApiResponse({ status: 201, description: 'User successfully created', type: userresponseName.USER_CREATED })
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        try {
            return await this.userService.createUser(createUserDTO);
        } catch (error) {
            throw new Error('Unable to create user: username must be unique');
        }
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })  // Describes the operation
    @ApiResponse({ status: 200, description: 'Get all users', type: userresponseName.GET_ALL_USER })
    @ResponseCustom(userresponseName.GET_ALL_USER)
    @ResponseCustom(userresponseName.GET_ALL_USER)
    async getAllUser() {
        return await this.userService.getAllUser();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get a user by ID' })  // Describes the operation
    @ApiParam({ name: 'id', description: 'The ID of the user to fetch', type: String })
    @ApiResponse({ status: 200, description: 'User found', type: userresponseName.GET_USER })
    @ResponseCustom(responseName.GET_USER)
    @ResponseCustom(responseName.GET_USER)
    async getUserById(@Param() { id }: GetUserPathParams) {
        return await this.userService.getUserById(id);
    }
}
