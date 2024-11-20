import { IsNumber, IsOptional } from "class-validator";

export class UpdateCostDto {
  @IsNumber()
  readonly cost: number;

  @IsOptional()
  @IsNumber()
  readonly interest?: number;
}
