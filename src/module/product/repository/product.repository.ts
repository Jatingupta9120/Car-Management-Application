import { Injectable } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from '../dto/product.dto';
import { ProductEntity } from '../entity/product.entity';

@Injectable()
export class ProductRepository {
    async getProductById(id: string) {
        return await ProductEntity.findByPk(id);
    }

    async getAllProduct() {
        return await ProductEntity.findAndCountAll();
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<ProductEntity> {
        console.log(createProductDTO,"33333333333333333333333333333333333")
        const b= await ProductEntity.create(createProductDTO);
        console.log(b,"444444444444444444444444")
        return b;
    }

    async updateProduct(id: string, itemInfo: UpdateProductDTO) {
        return await ProductEntity.update(itemInfo, {
            where: { id },
        });

        
    }

    async deleteProduct(id: string): Promise<string> {
        await ProductEntity.destroy({
            where: { id },
        });
        return "Deleted Product Details successfully";
    }
}
