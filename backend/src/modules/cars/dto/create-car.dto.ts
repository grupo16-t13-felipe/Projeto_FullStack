import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { CarImages } from '../entities/car.entity';

export class CreateCarsDto {
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  year: string;

  @IsString()
  @IsNotEmpty()
  fuelType: string;

  @IsString()
  @IsNotEmpty()
  miles: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isPromotional: boolean;

  @IsString()
  @IsNotEmpty()
  imagesUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsArray()
  images?: CarImages[] | null;

  @IsObject()
  brand?: object;
}

export class CreateImagesDto {
  @IsString()
  url: string;
}
