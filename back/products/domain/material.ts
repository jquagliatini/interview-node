export enum TypeMaterialEnum {
  Solid,
  Liquid,
  Gas,
}

export class Material {
  id: string;
  type: TypeMaterialEnum;
  weight: number;
  dimension: number;
  cost: number;
  interest: number;
}
