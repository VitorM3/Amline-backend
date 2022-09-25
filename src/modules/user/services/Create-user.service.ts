import HttpError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import crypt from "src/shared/utils/Cript.utils";
import EmailExistError from "../domain/errors/EmailExistError.user.error";
import UserType from "../domain/types/UserType.user.type";
import UserProviders from "./providers/UserProviders.user.providers";

export class CreateUserService extends Service<Omit<UserType,'password'>> {
    private newUser: UserType
    public constructor(
        private provider: UserProviders
    ){
        super();
    }

    // Setters
    public setNewUser(user: UserType){
        this.newUser = user;
        return this;
    }

    public async execute(): Promise<Omit<UserType,'password'> | HttpError>{
        try {
            const newUser = await this.serializeUser(this.newUser);
            const userInserted = await this.createUser(newUser);
            return userInserted;
        } catch (error) {
            throw error
        }
    }

    private async serializeUser(user: UserType){
        try {
            await this.verifyIfEmailExist(user.email);
            const newUser = await this.cryptPassword(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    private async verifyIfEmailExist(email: string){
        try {
            const emailExistAnyUser = await this.provider.get
            .setFilterEmail(email)
            .one();

            if(emailExistAnyUser != undefined){
                throw new EmailExistError().sendError()
            }
        } catch (error) {
            if(error.status){
                throw error
            }else{
                throw new InternalServerError(error.message).sendError()
            }
        }
    }

    private async cryptPassword(user: UserType){
        try {
            user.password = crypt(user.password)
            return user;
        } catch (error) {
            throw new InternalServerError(error.message)
        }
    }


    private async createUser(user: UserType){
        try {
            return await this.provider.post
            .setNewUser(user)
            .one()
        } catch (error) {
            throw new InternalServerError(error.message).sendError()
        }
    }


}