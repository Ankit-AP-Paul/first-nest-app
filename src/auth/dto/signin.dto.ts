import { ApiProperty } from '@nestjs/swagger';

export class UserSignIn {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  age: number;

  @ApiProperty({ enum: ['Male', 'Female'] })
  gender: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;

  @ApiProperty({ type: String })
  confirmPassword: string;
}
