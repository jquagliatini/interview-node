import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePriceDto {
  @IsNumber()
  readonly cost: number;

  @IsOptional()
  @IsNumber()
  readonly interest?: number;
}
