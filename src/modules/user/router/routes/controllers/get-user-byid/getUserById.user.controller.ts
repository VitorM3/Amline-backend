import { Injectable } from "@nestjs/common";
import { GetOneUserByIdDTO } from "src/modules/user/domain/dto/getOneUser.user.dto";
import UserType from "src/modules/user/domain/types/UserType.user.type";
import { UserServices } from "src/modules/user/services/UserServices.service";
import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";

@Injectable()
export default class GetUserByIdController extends Controller<Omit<UserType, "password">>{
    public constructor(
        private readonly userServices: UserServices
    ){
        super()
    }
    async handle({id}: GetOneUserByIdDTO): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            return await this.getUserByIdService(id)
        } catch (error) {
            throw error;
        }
    }

    private async getUserByIdService(id: number){
        try {
            return await this.userServices.getOneById.setIdUser(parseInt(`${id}`)).execute()
        } catch (error) {
            throw error;
        }
    }

}