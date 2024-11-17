import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
    async hashPassword(password: string) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async comparePassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }

    async createHash(data: string) {
        const saltRounds = 5;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(data, salt);
        return Buffer.from(hash).toString('base64');
    }

    async compareHash(data: string, hashedData: string) {
        const storedHash = Buffer.from(hashedData, 'base64').toString('ascii');
        return await bcrypt.compare(data, storedHash);
    }
}
