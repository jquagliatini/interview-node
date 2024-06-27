import { IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
    @IsNumber()
    readonly price!: number;

    @IsString()
    readonly name!: string;
}