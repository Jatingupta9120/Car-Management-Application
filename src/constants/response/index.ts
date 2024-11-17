import { iResponseStatusMessage } from 'src/utils/response/response.interface';
import {
    userresponseInfo,
    userresponseName,
} from './user/user_response.constants';
import {
    productresponseInfo,
    productresponseName,
} from './post/post_response.constants';

// Response action name
export const responseName = {
    ...userresponseName,
    ...productresponseName,
};

// Response information
export const responseInfo: Record<string, iResponseStatusMessage> = {
    ...userresponseInfo,
    ...productresponseInfo,
};
