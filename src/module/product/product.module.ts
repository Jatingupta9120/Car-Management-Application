import { Module } from '@nestjs/common';
import { ProductController } from './contoller/product.controller';
import { ProductService } from './service/product.service';
import { ProductRepository } from './repository/product.repository';
import { UserRepository } from '../user/repository/user.repository';
import { UserModule } from '../user/user.module';

@Module({
    imports: [UserModule],
    controllers: [ProductController],
    providers: [
        ProductService,
        ProductRepository,UserRepository
    ],
    exports: [ProductService, ProductRepository],
})
export class ProductModule {}
