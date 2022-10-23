import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import { Pagination } from "src/shared/base/domain/types/Pagination.base.type";
import { PaginationService } from "src/shared/base/service/Pagination.base.service";
import UserType from "../../domain/types/UserType.user.type";
import { GetUserProvider } from "../providers/get-user.user.provider";

export class GetAllUsersService extends PaginationService<Omit<UserType, "password">> {
    private name: string;
    private email: string;

    private readonly getProvider: GetUserProvider

    public constructor(){
        super()
        this.getProvider = new GetUserProvider()
    }

    setName(name: string){
        this.name = name;

        return this;
    }

    setEmail(email: string){
        this.email = email;

        return this;
    }


    async execute(): Promise<Pagination<Omit<UserType, "password">[]>> {
        try {
            const allUsers = await this.getAllUsers();

            return this.createPagination(allUsers)
        } catch (error) {
            throw error;
        }
    }

    private async getAllUsers(){
        try {
            return await this.getProvider
            .setFilterEmail(this.email)
            .setFilterName(this.name)
            .manyWithLike()
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}