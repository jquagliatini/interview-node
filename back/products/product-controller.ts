import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { ProductRepository } from './infrastructure/ProductRepository';

@Controller('prod')
export class ProductController {
  @Get()
  getProducts() {
    return new ProductRepository().getProduct(new PrismaClient());
  }
}
