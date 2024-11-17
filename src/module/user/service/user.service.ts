import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { USER_ERROR } from '../../../constants/error';
import { HttpExceptionWrapper } from '../../../utils/error/error.http.wrapper';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(createUserDTO: CreateUserDTO) {
        const user = await this.userRepository.getByEmail(createUserDTO?.email);
        if (user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_EMAIL_EXIST);
        }

        const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);

        const createdUser = await this.userRepository.create({
            ...createUserDTO,
            password: hashedPassword,
        });
        return createdUser.toJSON();
    }

    async getAllUser() {
        const users = await this.userRepository.getAll();
        return users;
    }

    async getUserById(id: string) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_NOT_EXIST);
        }
        return { user };
    }

    async getUSerByUsername(username: string) {
        const user = await this.userRepository.getByUserName(username);
        if (!user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_NOT_EXIST);
        }
        return user;
    }
}
