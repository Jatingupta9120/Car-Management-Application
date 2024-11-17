import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/module/product/entity/product.entity';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository {
    async create(createUserDTO: CreateUserDTO) {
        return await UserEntity.create(createUserDTO);
    }

    async getAll() {
        return await UserEntity.findAndCountAll();
    }

    async getById(userId: string) {
        return UserEntity.findByPk(userId, {
            include: [
                {
                    model: ProductEntity,
                    attributes: { exclude: ['userId'] },
                },
            ],
        });
    }

    async getUserDetailsById(userId: string) {
        
        const user= await UserEntity.findOne({
            where: { id: userId },
        });
        return user !== null;
    }

    async getByUserName(username: string) {
        return UserEntity.findOne({
            where: { username: username },
        });
    }

    async getByEmail(email: string) {
        return await UserEntity.findOne({
            where: { email },
        });
    }
}
