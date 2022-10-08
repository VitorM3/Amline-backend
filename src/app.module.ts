import { Module } from '@nestjs/common';
import AuthModule from './modules/auth/auth.module';
import DatabaseModule from './modules/database/database.module';
import GroupModule from './modules/group/group.module';
import UserModule from './modules/user/user.module';

@Module({
  imports: 
  [
    DatabaseModule,
    UserModule,
    AuthModule,
    GroupModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
