import { TypeMaterialEnum } from '@/products/domain/material';
import { Product, ProductItem } from '@/products/domain/product';

export class CalculatePriceProduct {
  public calculatePriceFromProduct(product: Product): number {
    let price = 0;
    // @ts-ignore
    product.items.reduce((i: ProductItem) => {
      i.materials.forEach((m) => {
        const atLeastOne = i.quantiy > 0;
        const isSolidMaterialValid =
          m.type == TypeMaterialEnum.Solid && m.weight > 0 && m.dimension > 0;
        const isLiquidMaterialValid =
          m.type == TypeMaterialEnum.Liquid && m.dimension > 0 && m.weight > 0;

        if (atLeastOne && (isSolidMaterialValid || isLiquidMaterialValid)) {
          price += m.cost * m.interest;
        }
      });
    });

    return price;
  }
}
