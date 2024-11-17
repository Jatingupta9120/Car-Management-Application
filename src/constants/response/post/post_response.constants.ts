import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const productresponseName = {
    GET_POST: 'GET_POST',
    GET_ALL_POSTS: 'GET_ALL_POSTS',
    PRODUCT_CREATED: 'PRODUCT_CREATED',
    PRODUCT_DELETED: 'PRODUCT_DELETED',
    PRODUCT_UPDATED: 'PRODUCT_UPDATED',
};

export const productresponseInfo: Record<string, iResponseStatusMessage> = {
    PRODUCT_CREATED: {
        message: 'Product created successfully',
        statusCode: HttpStatus.CREATED,
    },
    PRODUCT_DELETED: {
        message: 'Product deleted successfully',
        statusCode: HttpStatus.OK,
    },
    PRODUCT_UPDATED: {
        message: 'Product updated successfully',
        statusCode: HttpStatus.OK,
    },
    GET_PRODUCT: {
        message: 'fetch Product successfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_PRODUCTS: {
        message: 'fetch all Products successfully',
        statusCode: HttpStatus.OK,
    },
};
