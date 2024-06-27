import { CreateProductDTO } from "../dtos/create-product.dto";

export declare class ProductService {
  saveProduct(product: CreateProductDTO): Promise<void>;
}
