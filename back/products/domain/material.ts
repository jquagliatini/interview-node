import { TypeMaterialEnum } from './type-material-enum';

export class Material {
  constructor(
    readonly id: string,
    readonly type: TypeMaterialEnum,
    readonly weight: number,
    readonly dimension: number,
    readonly cost: number,
    readonly interest: number,
  ) {}

  update(props: { cost: number; interest: number }): Material {
    return new Material(
      this.id,
      this.type,
      this.weight,
      this.dimension,
      props.cost,
      props.interest,
    );
  }

  price(): number {
    if (!(this.isLiquid && this.isSolid)) {
      return 0;
    }

    return this.cost * this.interest;
  }

  private get isLiquid(): boolean {
    return this.hasWeightAndDimensions && this.type === TypeMaterialEnum.Liquid;
  }

  private get isSolid(): boolean {
    return this.hasWeightAndDimensions && this.type === TypeMaterialEnum.Solid;
  }

  private get hasWeightAndDimensions(): boolean {
    return this.weight > 0 && this.dimension > 0;
  }
}
