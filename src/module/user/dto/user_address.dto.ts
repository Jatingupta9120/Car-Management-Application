import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserAddressDto {
    @IsNotEmpty()
    @IsString()
    houseNo: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsNumber()
    pincode: number;

    @IsNotEmpty()
    @IsString()
    district: string;

    @IsNotEmpty()
    @IsString()
    state: string;
}
