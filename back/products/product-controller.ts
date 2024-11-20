import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./domain/product.service";
import { CalculatePriceProduct } from "./calculate-price";
import { UpdateCostDto } from "./dtos/update-cost.dto";

@Controller("prod")
export class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  @Post(":id/:itemId/:materialId")
  updatePrice(
    @Param("id") id: string,
    @Param("itemId") itemId: string,
    @Param("materialId") materialId: string,
    @Body() updatePriceDTO: UpdateCostDto,
  ) {
    if (typeof updatePriceDTO.cost !== "number") {
      throw new Error("Price is missing or invalid");
    }
    if (typeof updatePriceDTO.interest !== "number") {
      throw new Error("Interest is missing or invalid");
    }

    return this.service.updatePrice(id, materialId, itemId, updatePriceDTO);
  }

  @Get("get-price/:id")
  getPrice(@Param("id") id: string) {
    const service = new CalculatePriceProduct();
    return this.getProduct(id).then(service.calculatePriceFromProduct);
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.service.getProduct(id);
  }
}
