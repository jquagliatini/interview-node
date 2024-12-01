import { PrismaClient } from "@prisma/client";
import { UpdateCostDto } from "../dtos/update-cost.dto";
import { ProductRepository } from "../infrastructure/ProductRepository";
import { Product } from "./product";
import { CalculatePriceProduct } from "../calculate-price";

export class ProductService {
  repository: ProductRepository;
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.repository = new ProductRepository();
  }

  async updatePrice(
    productId: string,
    itemId: string,
    materialId: string,
    dto: UpdateCostDto,
  ): Promise<number> {
    const existingProduct = await this.getProduct(productId);
    const item = findOrThrow(
      existingProduct.items,
      (i) => i.id === itemId,
      "item",
    );
    const material = findOrThrow(
      item.materials,
      (m) => m.id === materialId,
      "material",
    );

    material.cost = dto.cost;
    material.interest = dto.interest;

    return new CalculatePriceProduct().calculatePriceFromProduct(
      existingProduct,
    );
  }

  private async getProduct(id: string): Promise<Product> {
    const products = await this.repository.getProduct(this.prisma);
    return findOrThrow(products, (p) => p.id === id, "product");
  }
}

function findOrThrow<T>(
  items: readonly T[],
  predicate: (value: T) => boolean,
  name = "value",
): T {
  const found = items.find(predicate);
  if (!found) {
    throw new Error(`${name} not found`);
  }
  return found;
}
