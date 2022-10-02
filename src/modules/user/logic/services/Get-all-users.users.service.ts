import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import { Pagination } from "src/shared/base/domain/types/Pagination.base.type";
import Service from "src/shared/base/service/Service.base.service";
import createPagination from "src/shared/utils/createPagination.utils";
import UserType from "../../domain/types/UserType.user.type";
import { GetUserProvider } from "../providers/get-user.user.provider";

export class GetAllUsersService extends Service<Pagination<Omit<UserType, "password">[]>> {
    private perPage: number
    private name: string;
    private email: string;
    private page: number;

    private readonly getProvider: GetUserProvider

    public constructor(){
        super()
        this.getProvider = new GetUserProvider()
    }

    // SETTERS
    setPerPage(perPage: number){
        this.perPage = perPage;

        return this;
    }

    setName(name: string){
        this.name = name;

        return this;
    }

    setEmail(email: string){
        this.email = email;

        return this;
    }

    setPage(page: number){{
        this.page = page;

        return this;
    }}


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

    private  createPagination(data: Omit<UserType, "password">[]): Pagination<Omit<UserType, "password">[]>{
        try {
            this.serializeDataToPagination()
           const itensSeparatedPerPage =  createPagination(data, this.perPage);


           return {
            data:itensSeparatedPerPage[this.page -1] ,
            page: this.page,
            itensPerPage: itensSeparatedPerPage[this.page -1].length,
            totalPages: itensSeparatedPerPage.length
           }

        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }

    private serializeDataToPagination(){
        if(!this.perPage){
            this.setPerPage(50)
        }

        if(!this.page){
            this.setPage(1)
        }
    }


}