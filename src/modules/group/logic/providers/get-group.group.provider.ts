import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/modules/database/services/PrismaService.database.service";

@Injectable()
export class GetGroupProvider{
    private filterName: string;
    private filterCode: string;
    private filterId: number;

    private repository: Prisma.groupsDelegate<Prisma.RejectOnNotFound> 
    public constructor(){
        this.repository = new PrismaService().groups
    }

    // Setters
    setFilterName(name: string){
        this.filterName = name;

        return this;
    }

    setFilterCode(code: string){
        this.filterCode = code;

        return this;
    }

    setFilterId(id: number){
        this.filterId = id;

        return this;
    }


    private createWhere(){
        try {
            const where: Prisma.groupsWhereInput = {
                deleted_at: null
            }

            if(this.filterName){
                where.name = this.filterName;
            }

            if(this.filterCode){
                where.code = this.filterCode;
            }

            if(this.filterId){
                where.id = this.filterId;
            }

            return where;
            
        } catch (error) {
            throw error;
        }
    }

    private createWhereWithLike(){
        try {
            const where: Prisma.groupsWhereInput = {
                deleted_at: null
            }

            if(this.filterName){
                where.name = {
                    startsWith: this.filterName
                };
            }

            if(this.filterCode){
                where.code = {
                    startsWith: this.filterCode
                };
            }

            if(this.filterId){
                where.id = this.filterId;
            }

            return where;
            
        } catch (error) {
            throw error;
        }
    }

    public async one(){
        try {
            const where = this.createWhere()

            return await this.repository.findFirst({where, select:{
                id: true,
                name: true,
                code: true
            }})
        } catch (error) {
            throw error;
        }
    }

    public async oneWithLike(){
        try {
            const where = this.createWhereWithLike()

            return await this.repository.findFirst({where, select:{
                id: true,
                name: true,
                code: true
            }}) 
        } catch (error) {
            throw error;
        }
    }

    public async many(){
        try {
            const where = this.createWhere()

            return await this.repository.findMany({where, select:{
                id: true,
                name: true,
                code: true
            }})
        } catch (error) {
            throw error;
        }
    }

    public async manyWithLike(){
        try {
            const where = this.createWhereWithLike()

            return await this.repository.findMany({where, select:{
                id: true,
                name: true,
                code: true
            }}) 
        } catch (error) {
            throw error;
        }
    }

}