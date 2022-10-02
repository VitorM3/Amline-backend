import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import UserType from "../../domain/types/UserType.user.type";
import DeleteUserProvider from "../providers/delete-user.user.provider";


export class DeleteUserService extends Service<Omit<UserType,'password'>>{
    private id: number

    private readonly deleteProvider: DeleteUserProvider
    public constructor(){
        super()

        this.deleteProvider = new DeleteUserProvider()
    }

    setIdUser(id: number){
        this.id = id

        return this;
    }

    async execute(): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            return await this.deleteUserById()
        } catch (error) {
            throw error
        }
    }

    private async deleteUserById(){
        try {
            return await this.deleteProvider
            .setIdToDelete(this.id)
            .one()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}