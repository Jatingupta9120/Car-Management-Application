import { ProductEntity } from 'src/module/product/entity/product.entity';

export interface User {
    fullname: string;
    email: string;
    username: string;
    password: string;
    birthdate: Date;
    products: ProductEntity[];
}
export interface login {
    username: string;
    password: string;
}
