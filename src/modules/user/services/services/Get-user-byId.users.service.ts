import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import Service from "src/shared/base/service/Service.base.service";
import UserType from "../../domain/types/UserType.user.type";
import UserProviders from "../UserProviders.user.providers";

export default class GetUserByIdService extends Service<Omit<UserType, "password">>{
    private idUser: number;

    public constructor(
        private readonly userProviders: UserProviders
    ){
        super()
    }

    setIdUser(id: number){
        this.idUser = id;
        return this;
    }

    async execute(): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            return await this.getUserById();
        } catch (error) {
            throw error;
        }
    }

    private async getUserById(){
        try {
            return await this.userProviders.get.setFilterId(this.idUser).one()
        } catch (error) {
            throw new InternalServerError(error.message).sendError()
        }
    }
}