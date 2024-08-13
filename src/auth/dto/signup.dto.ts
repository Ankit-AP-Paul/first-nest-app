import { ApiProperty } from '@nestjs/swagger';

export class UserSignUp {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}
