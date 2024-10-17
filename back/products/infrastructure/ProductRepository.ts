import { PrismaClient } from "@prisma/client";

export class ProductRepository {
  public async getProduct(prisma: PrismaClient): Promise<any[]> {
    //On récupère tous les produits qui ont un prix
    const qur = await prisma.$queryRaw<any>`SELECT * FROM Product WHERE price > 0;`;

    for (const r of qur) {
      r.Items = await this.getItemsFromProductId(prisma, r.id);
    }

    return qur;
  }

  public getItemsFromProductId(prisma: PrismaClient,id: string): Promise<any> {
    return prisma.$queryRawUnsafe(`SELECT * FROM ProductItem WHERE productId = ${id}`);
  }
}
