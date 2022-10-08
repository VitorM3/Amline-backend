import { members_group, Prisma } from "@prisma/client";
import { PrismaService } from "src/modules/database/services/PrismaService.database.service";
import MembersGroupType from "src/modules/group/submodules/members_group/domain/MembersGroup.group.type";

export default class CreateMemberGroupProvider{
    private idsMembersAdmin: number[]
    private idsMemberDefault: number[]
    private idGroup: number

    private readonly repository: Prisma.members_groupDelegate<Prisma.RejectOnNotFound>
    public constructor(){
        this.repository = new PrismaService().members_group
    }

    setIdsMembersAdmin(ids: number[]){
        this.idsMembersAdmin = ids

        return this;
    }

    setIdsMemberDefault(ids: number[]){
        this.idsMemberDefault = ids

        return this
    }

    setIdGroup(idGroup: number){
        this.idGroup = idGroup

        return this;
    }

    private async serializeObjectMembersGroup(idsMembers: number[], isAdmin: boolean){
        const membersInGroupWithoutCluster: MembersGroupType[] = idsMembers.map((idMember)=>{
            return {
                id: null,
                id_group: this.idGroup,
                id_member: idMember,
                isadmin: isAdmin
            }
        })
        const membersInGroup = await Promise.all(membersInGroupWithoutCluster)

        return membersInGroup
    }

    private async createObjectToCreateMembersGroup(){
        try {
            const membersAdminInGroup = await this.serializeObjectMembersGroup(
                this.idsMembersAdmin,
                true
            )
            
            const membersDefaultInGroup = await this.serializeObjectMembersGroup(
                this.idsMemberDefault,
                false
            )

            return [
                ...membersAdminInGroup,
                ...membersDefaultInGroup
            ]


        } catch (error) {
            throw error
        }
    }

    async one(){
        try {
            const newMembersInGroup = await this.createObjectToCreateMembersGroup() as members_group[]

            await this.repository.createMany({data:newMembersInGroup})

            return newMembersInGroup
        } catch (error) {
            throw error;
        }
    }
}