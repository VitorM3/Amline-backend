import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import EmailExistError from "../../domain/errors/EmailExistError.user.error";
import UserType from "../../domain/types/UserType.user.type";
import { GetUserProvider } from "../providers/get-user.user.provider";
import UpdateUserProvider from "../providers/update-user.user.provider";

export default class UpdateUserService extends Service<Omit<UserType, "password">>{
    private name: string;
    private email: string;
    private id: number

    private readonly getProvider: GetUserProvider
    private readonly updateProvider: UpdateUserProvider
    public constructor(){
        super()
        this.getProvider = new GetUserProvider()
        this.updateProvider = new UpdateUserProvider()
    }

    setName(name: string){
        this.name = name;

        return this;
    }

    setEmail(email: string){
        this.email = email;

        return this;
    }

    setIdUserToChange(id: number){
        this.id = id;

        return this;
    }

    async execute(): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            if(this.email){
                await this.verifyIfEmailAlreadyExist()
            }

            return await this.updateUserData()

        } catch (error) {
            throw error;
        }
    }

    private async verifyIfEmailAlreadyExist(){
        try {
            const emailExist = await this.getProvider
            .setFilterEmail(this.email)
            .one()
            console.log(emailExist)
            if(emailExist){
                throw new EmailExistError().sendError()
            }
        } catch (error) {
            if(error.status){
                throw error
            }else{
                throw new InternalServerError().sendError()
            }
        }
    }

    private async updateUserData(){
        try {
            return await this.updateProvider
            .setChangeEmail(this.email)
            .setChangeName(this.name)
            .setWhereIdUser(this.id)
            .one()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}