import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import UserModule from "../user/user.module";
import { AuthStrategy } from "./domain/strategy/auth.auth.strategy";
import { LocalStrategy } from "./domain/strategy/local.auth.strategy";
import AuthProviders from "./logic/AuthProvider.auth.provider";


@Module({
    imports:[
        PassportModule,
        UserModule,
        JwtModule.register({
            secret: 'Batatinha,xD',
            signOptions:{
                expiresIn:'24h'
            }
        })
    ],
    providers:[LocalStrategy,AuthProviders,AuthStrategy],
    exports:[AuthProviders,LocalStrategy,AuthStrategy]
})
export default class AuthModule{} 