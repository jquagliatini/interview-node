import { TypeMaterial } from "./material";
import { Product } from "./product";

export class CalculatePriceProduct {
  public calculatePriceFromProduct(product: Product): number {
    let price = 0;
    product.items.reduce((i) => {
      i.materials.forEach((m) => {
        const atLeastOne = i.quantiy > 0
        const isSolidMaterialValid = (m.type == TypeMaterial.Solid && m.Weight > 0 && m.Dimension > 0);
        const isLiquidMaterialValid = (m.type == TypeMaterial.Liquid && m.Dimension > 0 && m.Weight > 0);

        if (
          atLeastOne && (isSolidMaterialValid || isLiquidMaterialValid)
        ) {
          price += m.Cost * m.Interest;
        }
      });
    });

    return price;
  }
}
