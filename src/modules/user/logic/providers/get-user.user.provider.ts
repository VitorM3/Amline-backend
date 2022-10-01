import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/modules/database/services/PrismaService.database.service";

@Injectable()
export class GetUserProvider{
    private filterEmail: string;
    private filterPassword: string;
    private filterName: string;
    private filterCreated: Date;
    private filterDeleted: Date;
    private filterId: number;
    
    private repository: Prisma.usersDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().users
    }

    // Setters
    setFilterId(id: number){
        this.filterId = id;
        return this;
    }

    setFilterEmail(email: string){
        this.filterEmail = email;
        return this;
    }

    setFilterName(name: string){
        this.filterName = name;
        return this;
    }

    setFilterPassword(password: string){
        this.filterPassword = password;
        return this;
    }

    setFilterCreated(created: Date){
        this.filterCreated = created;
        return this;
    }

    setFilterDeleted(deleted: Date){
        this.filterDeleted = deleted;
        return this;
    }

    //=================================================================

    private createFilter(){
        try {
            const where: Prisma.usersWhereInput = {}

            if(this.filterEmail){
                where.email = this.filterEmail;
            }

            if(this.filterName){
                where.name = this.filterName;
            }

            if(this.filterPassword){
                where.password = this.filterPassword;
            }

            if(this.filterCreated){
                where.created_at = this.filterCreated;
            }

            if(this.filterDeleted){
                where.deleted_at = this.filterDeleted;
            }

            if(this.filterId){
                where.id = this.filterId;
            }

            return where;

        } catch (error) {
            throw error;
        }
    }
    private createFilterWithLike(){
        try {
            const where: Prisma.usersWhereInput = {}

            if(this.filterEmail){
                where.email = {
                    endsWith:this.filterEmail
                };
            }

            if(this.filterName){
                where.name = {
                    endsWith:this.filterName
                };
            }

            if(this.filterPassword){
                where.password = {
                    endsWith: this.filterPassword
                };
            }

            if(this.filterCreated){
                where.created_at = this.filterCreated;
            }

            if(this.filterDeleted){
                where.deleted_at = this.filterDeleted;
            }

            if(this.filterId){
                where.id = this.filterId;
            }

            return where;

        } catch (error) {
            throw error;
        }
    }

    /**
     * Procurar um usuário com base nos filtros passados
     */
    public async one(){
        try {
            const where = this.createFilter()
            const user = await this.repository.findFirst({where, select:{
                name: true,
                email: true,
                id: true,
                deleted_at: false,
                created_at: false,
                updated_at: false,
                password: false
                
            }})

            return user;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Procurar todos os usuários com base nos filtros passados
     */
    public async many(){
        try {
            const where = this.createFilter()
            const users = await this.repository.findMany({where, select:{
                name: true,
                email: true,
                id: true,
                deleted_at: false,
                created_at: false,
                updated_at: false,
                password: false,
            }})


            return users;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Procurar um usuário com base nos filtros passados com um like
     */
    public async oneWithLike(){
        try {
            const where = this.createFilterWithLike();
            const user = await this.repository.findFirst({where, select:{
                name: true,
                email: true,
                id: true,
                deleted_at: false,
                created_at: false,
                updated_at: false,
                password: false
                
            }});

            return user;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Procurar todos os usuários com base nos filtros com um like
     */
    public async manyWithLike(){
        try {
            const where = this.createFilterWithLike();
            const user = await this.repository.findMany({where, select:{
                name: true,
                email: true,
                id: true,
                deleted_at: false,
                created_at: false,
                updated_at: false,
                password: false
                
            }});

            return user;
        } catch (error) {
            throw error;
        }
    }

}