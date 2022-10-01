import { Module } from '@nestjs/common';
import AuthModule from './modules/auth/auth.module';
import DatabaseModule from './modules/database/database.module';
import UserModule from './modules/user/user.module';

@Module({
  imports: [DatabaseModule,UserModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
