import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { PrismaService } from "src/modules/database/services/PrismaService.database.service"

@Injectable()
export default class UpdateUserProvider {
    private changeName: string;
    private changeEmail: string;
    private changePassword: string;
    
    private whereIdUser: number;

    private repository: Prisma.usersDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().users
    }

    setChangeName(name: string){
        this.changeName = name;

        return this;
    }

    setChangeEmail(email: string){
        this.changeEmail = email;

        return this;
    }

    setChangePassword(password: string){
        this.changePassword = password

        return this;
    }

    setWhereIdUser(id: number){
        this.whereIdUser = id;

        return this;
    }

    private createDataToChange(){ 
        try {
            const data: Prisma.usersUpdateInput = {};

            if(this.changeName){
                data.name = this.changeName
            }

            if(this.changeEmail){
                data.email = this.changeEmail
            }

            if(this.changePassword){
                data.password = this.changePassword
            }

            return data;
            
        } catch (error) {
            throw error;
        }
    }

    async one(){
        try {
            const newUser = this.createDataToChange()
        
            return await this.repository.update({data: newUser,where:{id: this.whereIdUser}, select:{
                id: true,
                name: true,
                email: true,
                password: false,
                created_at: false,
                updated_at: false,
                deleted_at: false,
            }})
        } catch (error) {
            console.error(error)
            throw error;
        }
    }


}