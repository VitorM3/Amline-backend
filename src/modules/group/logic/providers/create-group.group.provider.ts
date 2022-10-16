import { groups, Prisma } from "@prisma/client";
import { PrismaService } from "src/modules/database/services/PrismaService.database.service";
import GroupType from "../../domain/types/GroupType.group.type";

export default class CreateGroupProvider{
    private group: GroupType
    private multipleGroups: GroupType[]

    private readonly repository: Prisma.groupsDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().groups
    }

    // Setters
    setGroup(group: GroupType){
        this.group = group;

        return this;
    }

    setMultipleGroups(groups: GroupType[]){
        this.multipleGroups = groups;

        return this;
    }

    public async one(){
        try {
            const newGroup = this.group as groups
            newGroup['created_at'] = new Date()
            
            return await this.repository.create({data: newGroup, select:{
                name: true,
                id: true,
                created_at: false,
                updated_at: false,
                deleted_at: false,
            }})
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async many(){
        try {
            const newGroups =  this.multipleGroups.map((group)=>{
                group['created_at'] = new Date()
            }) as unknown as groups[]

            return await this.repository.createMany({data: newGroups})
        } catch (error) {
            throw error;
        }
    }
}