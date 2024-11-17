import { IsNotEmpty } from 'class-validator';

export class Aadhar {
    @IsNotEmpty()
    aadharNo: number;

    @IsNotEmpty()
    dob: string;

    @IsNotEmpty()
    addressOnAdhar: string;
}
