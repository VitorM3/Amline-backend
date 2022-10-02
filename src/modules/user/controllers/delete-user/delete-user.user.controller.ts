import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import FieldNotFoundError from "src/shared/base/domain/error/FieldNotFound.base.error";
import UserNotFoundError from "../../domain/errors/UserNotFound.user.error";
import UserType from "../../domain/types/UserType.user.type";
import { UserServices } from "../../logic/UserServices.service";

export default class DeleteUserController extends Controller<Omit<UserType,'password'>>{
    public constructor(
        private readonly userService: UserServices
    ){
        super()
    }

    async handle(id: number): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            await this.verifyIdUser(id)

            return await this.deleteUserService(id)
        } catch (error) {
            throw error;
        }
    }

    private async verifyIdUser(id: number){
        try {
            if(!id){
                throw new FieldNotFoundError('id').sendError()
            }

            const user = await this.userService.getOneById
            .setIdUser(parseInt(`${id}`))
            .execute()

            if(!user){
                throw new UserNotFoundError().sendError()
            }
        } catch (error) {
            throw error
        }
    }

    private async deleteUserService(id: number){
        try {
            return await this.userService.delete
            .setIdUser(parseInt(`${id}`))
            .execute()
        } catch (error) {
            throw error
        }
    }
}