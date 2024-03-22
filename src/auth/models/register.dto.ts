import { IsEmail, IsNotEmpty } from "class-validator"

export class ReigsterDto {
  @IsNotEmpty()
  first_name: string

  @IsNotEmpty()
  last_name: string
  
  @IsNotEmpty()
  @IsEmail()
  email: string
  
  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  password_confirm: string
}