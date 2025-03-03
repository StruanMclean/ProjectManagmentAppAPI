import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateGroupGto {
  @IsString()
  @IsNotEmpty()
  name: string;
}