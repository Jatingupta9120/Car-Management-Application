import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { PRODUCT_ERROR } from '../errors/post';

export const productErrorConfig: ErrorConfig<PRODUCT_ERROR> = {
    [PRODUCT_ERROR.PRODUCT_NOT_EXISTS]: {
        message: 'product not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'PRODUCT_NOT_EXIST_ERROR',
    },
    [PRODUCT_ERROR.PRODUCT_ALREADY_EXISTS]: {
        message: 'email-id already exists',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'USER_EMAIL_EXIST_ERROR',
    },
};
