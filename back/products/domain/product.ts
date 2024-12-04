import { Material } from './material';

export class ProductItem {
  readonly id: string;
  readonly quantiy: number;
  readonly materials: readonly Material[];
}

export class Product {
  readonly id: string;
  readonly items: readonly ProductItem[];
}
