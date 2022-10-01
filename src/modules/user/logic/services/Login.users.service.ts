import { Injectable } from "@nestjs/common";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import crypt from "src/shared/utils/Cript.utils";
import UserNotAuthError from "../../domain/errors/UserNotAuth.user.error";
import UserType from "../../domain/types/UserType.user.type";
import UserProviders from "../UserProviders.user.providers";

@Injectable()
export class LoginService extends Service<Omit<UserType, "password"> | ErrorBaseError>{
    private email: string
    private password: string

    public constructor(
        private readonly userProviders: UserProviders
    ){
        super()
    }

    setEmail(email: string){
        this.email = email;

        return this;
    }

    setPassword(password: string){
        this.password = password;

        return this;
    }




    async execute(): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            this.cryptPassword()

            const userIsValid = await this.validadeUser()

            if(userIsValid){
                return userIsValid
            }
            throw new UserNotAuthError().sendError()
        } catch (error) {
            throw error;
        }
    }

    private cryptPassword(){
        try {
            const newPassword = crypt(this.password)

            this.setPassword(newPassword)
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }

    private async validadeUser(){
        try {
            const userIsValid = await this.userProviders.get
            .setFilterEmail(this.email)
            .setFilterPassword(this.password)
            .one()

            return userIsValid;
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}