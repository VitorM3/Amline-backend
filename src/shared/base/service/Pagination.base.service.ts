import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import { Pagination } from "src/shared/base/domain/types/Pagination.base.type";
import Service from "src/shared/base/service/Service.base.service";
import createPagination from "src/shared/utils/createPagination.utils";

export abstract class PaginationService<T> extends Service<Pagination<T[]>> {
    private perPage: number
    private page: number;


     public constructor(){super()}

    // SETTERS
    setPerPage(perPage: number){
        this.perPage = perPage;

        return this;
    }

    setPage(page: number){{
        this.page = page;

        return this;
    }}


    protected  createPagination(data: T[]): Pagination<T[]>{
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

    protected serializeDataToPagination(){
        if(!this.perPage){
            this.setPerPage(50)
        }

        if(!this.page){
            this.setPage(1)
        }
    }


}