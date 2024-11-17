import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseFilePipeBuilder,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import {
    CreateProductDTO,
    GetProductPathParams,
    UpdateProductDTO,
} from '../dto/product.dto';
import { ProductService } from '../service/product.service';

import { responseName } from 'src/constants/response';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/products',
                filename: (req:any, file:any, callback:any) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
            fileFilter: (req:any, file:any, callback:any) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                    return callback(new Error('Only image files are allowed!'), false);
                }
                callback(null, true);
            },
            limits: {
                fileSize: 5 * 1024 * 1024 // 5MB
            }
        }),
    )
    async createProduct(
        @Body() createProductDto: CreateProductDTO,
    @UploadedFile(
        new ParseFilePipeBuilder()
            .addFileTypeValidator({
                fileType: /(jpg|jpeg|png)$/,
            })
            .addMaxSizeValidator({
                maxSize: 5 * 1024 * 1024 
            })
            .build({
                errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                fileIsRequired: false,
            }),
    )
    file?: Express.Multer.File) {
        return await this.productService.createProduct(createProductDto,file);
    }

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    @ApiResponse({ status: 200, description: 'List of all products' })
    @ApiResponse({ status: 404, description: 'Products not found' })
    @ResponseCustom(responseName.GET_ALL_POSTS)
    async getAllUserProduct() {
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a product by ID' })
    @ApiParam({ name: 'id', description: 'Product ID', type: String })
    @ResponseCustom(responseName.GET_POST)
    @ApiResponse({ status: 404, description: 'Product not found' })
    @HttpCode(HttpStatus.OK)
    async getUserPostById(@Param() params: GetProductPathParams) {
        return await this.productService.getProductById(params.id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a product by ID' })
    @ApiParam({ name: 'id', description: 'Product ID', type: String })
    @ApiResponse({ status: 200, description: 'Product deleted successfully' })
    @ResponseCustom(responseName.PRODUCT_DELETED)
    async deleteItem(@Param() { id }: GetProductPathParams) {
        return await this.productService.deleteItem(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a product by ID' }) 
    @ApiParam({ name: 'id', description: 'Product ID', type: String })
    @ApiBody({ type: UpdateProductDTO })
    @ApiResponse({ status: 200, description: 'Product updated successfully' })
    @ResponseCustom(responseName.PRODUCT_UPDATED)
    async updateItem(
        @Body() itemInfo: UpdateProductDTO,
        @Param() { id }: GetProductPathParams,
    ) {
        return await this.productService.updateProduct(itemInfo, id);
    }
}
