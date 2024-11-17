import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const userresponseName = {
    USER_CREATED: 'USER_CREATED',
    GET_USER: 'GET_USER',
    GET_ALL_USER: 'GET_ALL_USER',
};

export const userresponseInfo: Record<string, iResponseStatusMessage> = {
    USER_CREATED: {
        message: 'User created successfully',
        statusCode: HttpStatus.CREATED,
    },

    GET_USER: {
        message: 'fetch user successfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_USERS: {
        message: 'fetch all user successfully',
        statusCode: HttpStatus.OK,
    },
};
