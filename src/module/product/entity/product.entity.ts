import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { CarCategory } from '../dto/product.dto';

@Table({ tableName: 'product' })
export class ProductEntity extends Model<ProductEntity> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
    @ForeignKey(() => UserEntity)
    userId: string;
    

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    title: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    description: string;

    @Column({
        allowNull: false,
        type: DataType.JSONB,
        defaultValue: [],
    })
    tags: string[];

    @Column({
        allowNull: true,
        type: DataType.JSONB,
        defaultValue: [],
    })
    images: string[];

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    company: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    dealer: string;

    @Column({
        allowNull: false,
        type: DataType.ENUM,
        values: Object.values(CarCategory),
    })
    carType: CarCategory;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        defaultValue: "Delhi",
    })
    location: string;
}
