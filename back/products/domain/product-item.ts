import { isDefined } from 'class-validator';

import { MaterialNotFound } from './errors';
import { Material } from './material';

export class ProductItem {
  constructor(
    readonly id: string,
    readonly quantiy: number,
    readonly materials: readonly Material[],
  ) {}

  updateMaterialCost(props: { materialId: string; cost: number; interest: number }): ProductItem {
    const material = this.materials.find((material) => material.id === props.materialId);
    if (!isDefined(material)) throw new MaterialNotFound(props.materialId);

    const { cost, interest } = props;
    const newMaterial = material.update({ cost, interest });

    const updatedList = this.materials.map((material) =>
      material.id === props.materialId ? newMaterial : material,
    );
    return new ProductItem(this.id, this.quantiy, updatedList);
  }

  price(): number {
    if (this.quantiy <= 0) {
      return 0;
    }

    return this.materials.reduce((sum, material) => sum + material.price(), 0);
  }
}
