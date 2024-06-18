import { Material } from "./material";

export declare class ProductItem {
    readonly quantiy: number;
    readonly materials: readonly Material[];
}

export declare class Product {
    readonly items: readonly ProductItem[];
}