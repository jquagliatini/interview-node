import { Body, Controller, Param, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { UpdateCostDto } from './dtos/update-cost.dto';
import { MaterialRepository } from './infrastructure/MaterialRepository';

@Controller('materials')
export class MaterialController {
  @Post(':materialId')
  updateCost(@Param('materialId') materialId: string, @Body() dto: UpdateCostDto) {
    if (typeof dto.cost !== 'number') {
      throw new Error('Price is missing or invalid');
    }
    if (typeof dto.interest !== 'number') {
      throw new Error('Interest is missing or invalid');
    }

    const repo = new MaterialRepository(new PrismaClient());
    const { cost, interest } = dto;
    return repo.updateCost(materialId, cost, interest);
  }
}
