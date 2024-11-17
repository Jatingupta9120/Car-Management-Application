// import { PickType } from '@nestjs/swagger';
// import { CreateNewUserDTO } from './create_user.dto';

// /**
//  *
//  * @param PickLoginField
//    @description Here we pick email and password from CreateNewUserDto with validation using pickType mapped utility

//  * @param CreateNewUserDTO
//    @description multiple fields are in this class with class-validator decorators

//  * PickType Utility will give the classDto with only Two properties email and password with all validation decorators associated with them;

//  */
// export class PickLoginField extends PickType(CreateNewUserDTO, [
//     'email',
//     'password',
// ]) {}
