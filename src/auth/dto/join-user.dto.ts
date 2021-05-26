import { IsMobilePhone, IsString, MaxLength, MinLength } from 'class-validator';

export class JoinUserDto {
  @MinLength(7)
  @MaxLength(15)
  @IsMobilePhone()
  @IsString()
  readonly phone: string;
}
