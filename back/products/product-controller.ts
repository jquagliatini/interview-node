import { Body, Controller, Param, Post, Get } from '@nestjs/common';

import { ProductService } from '@/products/domain/product.service';
import { UpdateCostDto } from '@/products/dtos/update-cost.dto';

@Controller('prod')
export class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  @Post(':id/:itemId/:materialId')
  updatePrice(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @Param('materialId') materialId: string,
    @Body() updatePriceDTO: UpdateCostDto,
  ) {
    if (typeof updatePriceDTO.cost !== 'number') {
      throw new Error('Price is missing or invalid');
    }
    if (typeof updatePriceDTO.interest !== 'number') {
      throw new Error('Interest is missing or invalid');
    }

    return this.service.updatePrice(id, materialId, itemId, updatePriceDTO);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.service.getProduct(id);
  }
}
