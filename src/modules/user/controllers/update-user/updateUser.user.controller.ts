import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import FieldNotFoundError from "src/shared/base/domain/error/FieldNotFound.base.error";
import UserNotFoundError from "../../domain/errors/UserNotFound.user.error";
import UpdateUserControllerParams from "../../domain/types/UpdateUserController.user.type";
import UserType from "../../domain/types/UserType.user.type";
import { UserServices } from "../../logic/UserServices.service";

export class UpdateUserController extends Controller<Omit<UserType,'password'>>{
    public constructor(
        private readonly userServices: UserServices
    ){
        super()
    }

    async handle(updateUser:UpdateUserControllerParams): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            await this.verifyId(updateUser.id)
            return await this.updateUser(updateUser)
        } catch (error) {
            throw error;
        }
    }

    private async verifyId(id: number){
        try {
            if(!id){
                throw new FieldNotFoundError('id').sendError()
            }

            const user = await this.userServices.getOneById
            .setIdUser(parseInt(`${id}`))
            .execute()


            if(!user){
                throw new UserNotFoundError().sendError()
            }

        } catch (error) {
            throw error
        }
    }

    private async updateUser({id,name,email}:UpdateUserControllerParams){
        try {
            return await this.userServices.update
            .setEmail(email)
            .setName(name)
            .setIdUserToChange(parseInt(`${id}`))
            .execute()
        } catch (error) {
            throw error;
        }
    }
}