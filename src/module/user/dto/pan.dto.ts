import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Pan {
    @IsNotEmpty()
    @IsNumber()
    panNo: number;

    @IsNotEmpty()
    @IsString()
    fatherNameOnPan: string;

    @IsNotEmpty()
    @IsString()
    addressOnPAn: string;
}
