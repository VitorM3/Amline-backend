import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { PrismaService } from "src/modules/database/services/PrismaService.database.service"

@Injectable()
export default class DeleteUserProvider {
    private id: number;

    private repository: Prisma.usersDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().users
    }

    setIdToDelete(id: number){
        this.id = id;

        return this;
    }

    async one(){
        try {
            return await this.repository.update({
                data:{deleted_at: new Date()},
                where:{id:this.id},
                select:{
                id: true,
                name: true,
                email: true,
                password: false,
                created_at:false,
                updated_at:false,
                deleted_at:false
            }})
        } catch (error) {
            throw error;
        }
    }


}