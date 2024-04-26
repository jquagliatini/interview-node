import { EntityManager } from "typeorm";

export class ProductRepository {
  public async getProduct(manager: EntityManager): Promise<any[]> {
    //On récupère tous les produits qui ont un prix
    const qur = await manager.query(`SELECT * FROM Product WHERE Price > 0;`);

    for (const r of qur) {
      r.Items = await this.getItemsFromProductId(manager, r.id);
    }

    return qur;
  }

  public getItemsFromProductId(
    manager: EntityManager,
    id: number
  ): Promise<any> {
    return manager.query(`SELECT * FROM ProductItem WHERE ProductId = ${id}`);
  }
}
