import { IntersectionType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { UserAddressDto } from './user_address.dto';
/**

  * @param UserInfoDto
    @description In this class we extends all the property of UserAddressDTo and we also provide own field on this Class
  
  *  IntersectionType is used to add all fields of extends class dto into child class DTO.

  *   in our example we extends the property of UserAddressDto in UserInfoDto with all validators
  
  * in IntersectionType we can pass multiple classDto
*/
export class UserInfoDto extends IntersectionType(UserAddressDto) {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty({ message: 'first name not be empty' })
    @IsString()
    lastName: string;

    @Min(18)
    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}
