import { Injectable } from "@nestjs/common";
import { GetAllUsersDTO } from "src/modules/user/domain/dto/getallUsers.user.dto";
import UserType from "src/modules/user/domain/types/UserType.user.type";
import { UserServices } from "src/modules/user/logic/UserServices.service";
import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import { Pagination } from "src/shared/base/domain/types/Pagination.base.type";

@Injectable()
export class GetAllUsersController extends Controller<Pagination<Omit<UserType, "password">[]>> {
    public constructor(
        private readonly userService: UserServices
    ){
        super()
    }

    async handle(filter: GetAllUsersDTO): Promise<Pagination<Omit<UserType, "password">[]> | ErrorBaseError> {
        try {
           return await this.getAllUsersService(filter);
        } catch (error) {
            throw error;
        }
    }

    private async getAllUsersService(filter: GetAllUsersDTO){
        try {
            return await this.userService.getAll
            .setEmail(filter.email)
            .setName(filter.name)
            .setPage(parseInt(`${filter.page}`))
            .setPerPage(parseInt(`${filter.perPage}`))
            .execute()
        } catch (error) {
            
        }
    }
}