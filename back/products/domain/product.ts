import { isDefined } from '@/shared/is-defined';

import { ProductItemNotFound } from './errors';
import { ProductItem } from './product-item';

export class Product {
  constructor(readonly items: readonly ProductItem[]) {}

  price(): number {
    return this.items.reduce((sum, productItem) => sum + productItem.price(), 0);
  }

  updateMaterialCost(props: {
    itemId: string;
    materialId: string;
    cost: number;
    interest: number;
  }): Product {
    const item = this.items.find((item) => item.id === props.itemId);
    if (!isDefined(item)) throw new ProductItemNotFound(props.itemId);

    const { materialId, cost, interest } = props;
    const newItem = item.updateMaterialCost({ materialId, cost, interest });

    const newList = this.items.map((item) => (item.id === props.itemId ? newItem : item));
    return new Product(newList);
  }
}
