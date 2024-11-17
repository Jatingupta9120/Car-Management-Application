import { PartialType } from '@nestjs/swagger';
import { UserAddressDto } from './user_address.dto';
/**
 * PartialType mapped utility type gives a class with all the property of passed class(UserAddressDto) and make all the property IsOptional.
 
 * we can also make own property of PartialFields Class
 * 
 * @param partialFields
   @description In this class we extends all the property of UserAddressDTo with IsOptional validation
 */
export class PartialFields extends PartialType(UserAddressDto) {}
