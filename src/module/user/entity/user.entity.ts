import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductEntity } from 'src/module/product/entity/product.entity';
import { UserDTO } from '../dto/create_user.dto';

export enum Role {
    USER = 'user',
    ADMIN = 'admin',
}

@Table({ tableName: 'user' })
export class UserEntity extends Model<UserDTO> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    username: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password: string;

    @Column({
        allowNull: false,
        type: DataType.DATEONLY,
        defaultValue: '1990-05-15T00:00:00.000Z',
    })
    birthdate: Date;

    @Column({
        allowNull: true,
        type: DataType.ENUM,
        values: Object.values(Role),
        defaultValue: Role.USER,
    })
    role?: Role;

    @HasMany(() => ProductEntity)
    products: ProductEntity[];
}
