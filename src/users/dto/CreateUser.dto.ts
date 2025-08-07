import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateUserSettingsDto {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  receiveNotifications?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  receiveEmails?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  receiveSMS?: boolean;
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  displayName?: string;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingsDto)
  settings?: CreateUserSettingsDto;
}
