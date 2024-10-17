export enum TypeMaterialEnum {
    Solid,
    Liquid,
}

export class Material {
    readonly type: TypeMaterialEnum;
    readonly weight: number;
    readonly dimension: number;
    readonly cost: number;
    readonly interest: number;
}