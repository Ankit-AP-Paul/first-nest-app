import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [AuthController, AppController],
  providers: [AuthService, AppService],
})
export class AuthModule {}
