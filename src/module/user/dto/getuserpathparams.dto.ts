import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}
