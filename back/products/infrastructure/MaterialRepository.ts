import { PrismaClient } from '@prisma/client';

import { CalculatePriceProduct } from '../calculate-price';
import { Product } from '../domain/product';

export class MaterialRepository {
  constructor(private prisma: PrismaClient) {}

  async updateCost(materialId: string, cost: number, interest: number) {
    const calculatePriceProduct = new CalculatePriceProduct();
    const products = await this.findProductsByMaterial(materialId);

    await this.prisma.$transaction([
      this.prisma.material.update({
        where: { id: materialId },
        data: { cost, interest },
      }),
      ...products.map((product) =>
        this.prisma.product.update({
          where: { id: product.id },
          data: { price: calculatePriceProduct.calculatePriceFromProduct(product) },
        }),
      ),
    ]);
  }

  private findProductsByMaterial(materialId: string): Promise<Product[]> {
    // This is not implemented to keep the file lean
    throw new Error('NotImplemented');
  }
}
