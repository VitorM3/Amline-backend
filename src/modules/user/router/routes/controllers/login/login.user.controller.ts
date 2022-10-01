import { Request, Response } from "express";
import AuthProviders from "src/modules/auth/logic/AuthProvider.auth.provider";
import LoginControllerParams from "src/modules/user/domain/types/LoginController.user.type";
import UserType from "src/modules/user/domain/types/UserType.user.type";
import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";

export class LoginController extends Controller<Omit<UserType, "password">>{
    public constructor(
        private readonly authProvider: AuthProviders
    ){
        super()
    }

    async handle({req,res}:LoginControllerParams): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            const user = this.getUserData(req)
            const token = await this.generateAuthToken(user)
            this.createCookie(token,res)
            return user;
        } catch (error) {
            throw error;
        }
    }

    private getUserData(req: Request){
        try {
            return req.user as Omit<UserType,'password'>
        } catch (error) {
            throw error;
        }
    }

    private async generateAuthToken(user: Omit<UserType,'password'>){
        try {
            return await this.authProvider.generateJwtToken
            .setValueToCreateToken(user)
            .generate()
        } catch (error) {
            throw error
        }
    }

    private createCookie(token: string, res: Response){
        try {
            const secretData = {
                token,
                refreshToken: '',
              };
              return res.cookie('auth-cookie',secretData,{httpOnly: true})
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}