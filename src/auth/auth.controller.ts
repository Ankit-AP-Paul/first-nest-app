import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignIn, UserSignUp } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: UserSignUp) {
    console.log(body);
    return this.authService.signup();
  }

  @Post('signin')
  signin(@Body() body: UserSignIn) {
    console.log(body);
    return this.authService.signin();
  }
}
