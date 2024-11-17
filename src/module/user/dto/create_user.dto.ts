import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MinLength,
} from 'class-validator';
import { Role } from '../entity/user.entity';

export class UserDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID(4)
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @Type(() => Date)
    birthDate?: Date;

    @ApiProperty({ enum: Role, enumName: 'Role' })
    @IsEmpty()
    role?: Role;
}

export class CreateUserDTO extends OmitType(UserDTO, ['id'] as const) {}

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}


export class LoginCredentialsDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    userName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}