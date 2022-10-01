import { Injectable} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import UserNotAuthError from "src/modules/user/domain/errors/UserNotAuth.user.error";
 
@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy,'auth') {
    constructor(){
        super({
            ignoreExpiration: false,
            secretOrKey:"Batatinha,xD",
            jwtFromRequest:ExtractJwt.fromExtractors([(request:Request) => {
                const data = request?.cookies["auth-cookie"];
                console.log(data)
                if(!data){
                    console.log
                    return null;
                }
                return data.token
            }])
        });
    }
 
    async validate(payload:any){
        if(payload === null){
            throw new UserNotAuthError().sendError();
        }
        return payload;
    }
}