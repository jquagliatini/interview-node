import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getProductById(id: string) {
    /**
     * This is equivalent to
     * ```sql
     * SELECT id, JSON_AGG(items) AS "productItems"
     * FROM "Product"
     * LEFT JOIN (
     *   SELECT "productId", id, quantiy, JSON_AGG("Material")
     *   FROM "ProductItem"
     *      LEFT JOIN "Material" ON "Material"."productItemId" = "ProductItem".id
     * ) AS items ON items."productId" = "Product".id
     * WHERE "Product".id = ${id}
     * ```
     */
    return this.prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        productItems: {
          select: {
            id: true,
            quantiy: true,
            materials: {
              select: {
                id: true,
                cost: true,
                type: true,
                weight: true,
                interest: true,
                dimensions: true,
              },
            },
          },
        },
      },
    });
  }
}
