import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsISO8601 } from 'class-validator';
import { Entry } from '../entities/entry.entity';

export class CreateEntryDto extends OmitType(Entry, ['id']) {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsISO8601()
  date: string;

  @IsNumber()
  amount: number;
}