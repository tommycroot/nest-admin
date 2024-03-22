import { Controller, Query, Get, UseGuards, Body, Post, Param, Put, Delete} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductCreateDto } from './models/product-create.dto';
import { ProductUpdateDto } from './models/product-update.dto';


@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {

  }
  
  @Get()
  async all(@Query('page') page = 1) {
    return this.productService.pagninate(page)
  }

  @Post()
  async create(@Body() body: ProductCreateDto) {
    return this.productService.create(body)
  }


  @Get(':id')
  async get(@Param(':id') id: number) {
    return this.productService.findOneById(id)
  }

  @Put(':id')
  async update(
    @Param(':id') id: number,
    @Body() body: ProductUpdateDto
  ) {
    await this.productService.update(id, body)
    return this.productService.findOneById(id)
  }

  @Delete(':id')
  async delete(@Param(':id') id: number) {
    return this.productService.delete(id)
  }


}
