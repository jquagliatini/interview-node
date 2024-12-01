import { Body, Controller, Param, Put, Get, UseFilters } from '@nestjs/common';

import { UpdatePriceDto } from '@/products/dtos/update-price.dto';
import { DomainExceptionFilter } from '@/products/infrastructure/domain-exception.filter';
import { ProductService } from '@/products/infrastructure/product.service';

@Controller('products')
@UseFilters(DomainExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put(':id/items/:itemId/materials/:materialId/cost')
  updatePrice(
    @Param('id') productId: string,
    @Param('itemId') itemId: string,
    @Param('materialId') materialId: string,
    @Body() { cost, interest }: UpdatePriceDto,
  ): Promise<number> {
    return this.productService.updatePrice({ productId, itemId, materialId, cost, interest });
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }
}
