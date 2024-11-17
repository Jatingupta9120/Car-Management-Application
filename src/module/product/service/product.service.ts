import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/module/user/repository/user.repository';
import { ProductRepository } from '../repository/product.repository';
import { CreateProductDTO, UpdateProductDTO } from '../dto/product.dto';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { PRODUCT_ERROR, USER_ERROR } from 'src/constants/error';

@Injectable()
export class ProductService {
    constructor(
        private  productRepository: ProductRepository,
        private  userRepository: UserRepository,
    ) {}

    async createProduct(createProductDTO: CreateProductDTO, file?: Express.Multer.File) {
        console.log("-++++++++-------------------------------------------------------------------------");
        console.log(createProductDTO,"-++++++++-------------------------------------------------------------------------");

        const user = await this.userRepository.getUserDetailsById(createProductDTO.userId);
        console.log(user,"-*******-------------------------------------------------------------------------");

        if (!user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_NOT_EXIST);
        }

        const productData = {
            ...createProductDTO,
            images: file ? [`uploads/products/${file.filename}`] : [],
        }
        const product = await this.productRepository.createProduct(productData);
        return  product.toJSON();
    }

    async getAllProducts() {
        const product = await this.productRepository.getAllProduct();
        return product;
    }

    async getProductById(id: string) {
        const product = await this.productRepository.getProductById(id);
        if (!product) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }
        return { product };
    }

    async updateProduct(updateItemDto: UpdateProductDTO, id: string) {
        const existingItem = await this.productRepository.getProductById(id);
        if (!existingItem) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }

        const updatedItem = await this.productRepository.updateProduct(
            id,
            updateItemDto,
        );
        return updatedItem[0];
    }

    async deleteItem(id: string): Promise<void> {
        const existingItem = await this.productRepository.getProductById(id);
        if (!existingItem) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }

        await this.productRepository.deleteProduct(id);
    }
}
