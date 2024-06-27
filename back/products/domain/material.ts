export declare enum TypeMaterial {
    Solid,
    Liquid,
}

export declare class Material {
    readonly type: TypeMaterial;
    readonly Weight: number;
    readonly Dimension: number;
    readonly Cost: number;
    readonly Interest: number;
}