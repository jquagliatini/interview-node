import { Body, Controller, Post } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductService } from "./domain/product.service";

@Controller("prod")
export class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  @Post()
  createProduct(@Body() createProductDTO: CreateProductDTO) {
    if (typeof createProductDTO.price !== "number") {
      throw new Error("Price is missing or invalid");
    }
    if (typeof createProductDTO.name !== "string") {
      throw new Error("Price is missing or invalid");
    }

    return this.service.saveProduct(createProductDTO);
  }
}
