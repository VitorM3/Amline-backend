import { Request } from "express";
import Controller from "src/shared/base/controller/Controler.base.controller";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";
import CreateGroupParams from "../../domain/types/CreateGroupParams.group.type";
import GroupType from "../../domain/types/GroupType.group.type";
import { GroupServices } from "../../logic/GroupServices.group.service";
import { MembersGroupService } from "../../submodules/members_group/logic/MembersGroup.members.group.service";

export class CreateGroupController extends Controller<GroupType>{
    public constructor(
        private readonly groupService: GroupServices,
        private readonly membersGroupService: MembersGroupService
    ){
        super()
    }

    async handle({name,req}:CreateGroupParams): Promise<GroupType | ErrorBaseError> {
        try {
            const userId = this.getIdOfLoggedUser(req)
            const newGroup = await this.createGroupService({name, id: undefined})
            await this.addLeaderInGroup(newGroup,userId)
    
            return newGroup;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    private getIdOfLoggedUser(req: Request){
        try {
            const idLoggedUser = req.user['id']
            return idLoggedUser
        } catch (error) {
            console.log(error)
            throw new InternalServerError().sendError()
        }
    }

    private async createGroupService(group: GroupType){
        try {
            return await this.groupService.create
            .setNewGroup(group)
            .execute() as GroupType
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    private async addLeaderInGroup(group: GroupType, userId: number){
        try {
            return await this.membersGroupService.addMember
            .setGroupId(group.id)
            .setNewMembersIdAdmin([userId])
            .execute()
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}