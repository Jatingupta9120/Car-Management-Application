import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsUUID,
    IsEnum,
    Length,
    IsOptional,
    IsArray,
} from 'class-validator';

export enum CarCategory {
    SEDAN = 'Sedan',
    SUV = 'SUV',
    HATCHBACK = 'Hatchback',
    CONVERTIBLE = 'Convertible',
    COUPE = 'Coupe',
    PICKUP = 'Pickup',
    MINIVAN = 'Minivan',
    ELECTRIC = 'Electric',
    HYBRID = 'Hybrid',
}

export class ProductDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID(4)
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3, 255, { message: 'Title must be between 3 and 255 characters' })
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(2, 255, { message: 'desc. must be between 2 and 255 characters' })
    description: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    location: string;

    @IsEnum(CarCategory)
    @IsNotEmpty()
    @ApiProperty({ enum: CarCategory, enumName: 'CarCategory' })
    carType: CarCategory;

    @IsArray()
    @IsOptional()
    tags: string[];

    @IsArray()
    @IsOptional()
    images: string[];

    @IsString()
    @IsOptional()
    company: string;

    @IsString()
    @IsOptional()
    dealer: string;
}

export class CreateProductDTO extends ProductDTO {}

export class UpdateProductDTO extends CreateProductDTO {}

export class GetProductPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}
