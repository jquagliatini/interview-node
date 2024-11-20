import { PrismaClient } from "@prisma/client";
import { UpdateCostDto } from "../dtos/update-cost.dto";
import { ProductRepository } from "../infrastructure/ProductRepository";
import { Product } from "./product";

export class ProductService {
  repository: ProductRepository;
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.repository = new ProductRepository();
  }

  updatePrice(
    _productId: string,
    _itemId: string,
    _materialId: string,
    _product: UpdateCostDto,
  ): Promise<void> {
    // TODO
    return Promise.resolve();
  }

  async getProduct(id: string): Promise<Product> {
    const products = await this.repository.getProduct(this.prisma);
    const product = products.find((p) => p.id === id);
    if (!product) throw new Error(`product not found`);
    return product;
  }
}
