import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { LoginService } from "src/modules/user/logic/services/Login.users.service";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local'){
    public constructor(
        private readonly loginUser: LoginService
    ){
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string){
        try {
            return await this.loginUser
            .setEmail(email)
            .setPassword(password)
            .execute();
        } catch (error) {
            throw new HttpException(error.message,error.status)
        }
    }
}