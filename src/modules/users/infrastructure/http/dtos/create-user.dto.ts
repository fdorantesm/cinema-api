import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsObject,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ProfileDto } from '@/modules/users/infrastructure/http/dtos/profile.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'louis@example.com' })
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 'hkQjS0q((?aSc' })
  @IsString()
  @IsOptional()
  public password?: string;

  @ApiProperty({
    example: { firstname: 'Louis', lastname: 'Hamilton', phone: '+525678901234' },
  })
  @IsObject()
  @Type(() => ProfileDto)
  @ValidateNested({ each: true })
  public profile: ProfileDto;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  public isActive?: boolean;
}
