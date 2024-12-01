import { Injectable } from '@nestjs/common';
import { TypeMaterialEnum as PrismaTypeMaterialEnum } from '@prisma/client';

import { ProductNotFound } from '@/products/domain/errors';
import { Material } from '@/products/domain/material';
import { Product } from '@/products/domain/product';
import { ProductItem } from '@/products/domain/product-item';
import { TypeMaterialEnum } from '@/products/domain/type-material-enum';
import { ProductRepository } from '@/products/infrastructure/product.repository';
import { assertNever } from '@/shared/assert-never';
import { isDefined } from '@/shared/is-defined';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async updatePrice(props: {
    productId: string;
    itemId: string;
    materialId: string;
    cost: number;
    interest: number;
  }): Promise<number> {
    const { productId, ...rest } = props;
    const product = await this.getProduct(productId);
    if (!isDefined(product)) throw new ProductNotFound(productId);

    const updatedProduct = product.updateMaterialCost(rest);
    return updatedProduct.price();
  }

  async getProduct(id: string): Promise<Product | null> {
    const product = await this.repository.getProductById(id);
    if (!product) {
      return null;
    }

    return new Product(
      product.productItems.map(
        (item) =>
          new ProductItem(
            item.id,
            item.quantiy,
            item.materials.map(
              (material) =>
                new Material(
                  material.id,
                  prismaTypeMaterialToTypeMaterialEnum(material.type),
                  material.weight,
                  material.dimensions,
                  material.cost,
                  material.interest,
                ),
            ),
          ),
      ),
    );
  }
}

function prismaTypeMaterialToTypeMaterialEnum(value: PrismaTypeMaterialEnum): TypeMaterialEnum {
  switch (value) {
    case PrismaTypeMaterialEnum.solid:
      return TypeMaterialEnum.Solid;
    case PrismaTypeMaterialEnum.liquid:
      return TypeMaterialEnum.Liquid;
    case PrismaTypeMaterialEnum.gas:
      return TypeMaterialEnum.Gas;
    default:
      return assertNever(value);
  }
}
