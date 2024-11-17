import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from 'src/module/auth/auth.module';
import { ProductModule } from 'src/module/product/product.module';
import { UserModule } from 'src/module/user/user.module';

const dynamicModule = [
    {
        path: 'users',
        module: UserModule,
    },
    {
        path: 'product',
        module: ProductModule,
    },
    {
        path: 'auth',
        module: AuthModule,
    }
];

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                ...dynamicModule.map((item) => item.module),
                RouterModule.register(dynamicModule),
            ],
        };
    }
}
