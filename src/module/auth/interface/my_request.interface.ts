import { Request } from 'express';
import { iAuthTokenInfo } from './auth.interface';

export interface MyRequest extends Request {
    userInfo: iAuthTokenInfo;
}
