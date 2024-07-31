import { registers } from '#/mocks/register.mock';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class RegisterRequestDto {
  @ApiProperty({ example: registers[1].email })
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: registers[1].password })
  @IsString()
  @IsOptional()
  public password: string;

  @ApiProperty({ example: registers[1].name })
  @IsString()
  public name: string;

  @ApiProperty({ example: registers[1].surname })
  @IsString()
  public surname: string;

  @ApiProperty({ example: registers[1].username })
  @IsString()
  public username: string;

  @ApiProperty({ example: registers[1].phone })
  @IsPhoneNumber()
  public phone: string;

  @ApiPropertyOptional({ example: registers[1].isRecruiter, default: false })
  @IsOptional()
  @IsBoolean()
  public isRecruiter?: boolean;
}
