import { Injectable } from "@nestjs/common";
import { GroupServices } from "../logic/GroupServices.group.service";
import { MembersGroupService } from "../submodules/members_group/logic/MembersGroup.members.group.service";
import { CreateGroupController } from "./create-group/createGroup.group.controller";

@Injectable()
export default class GroupControllers{
    // POST ROUTER
    public create: CreateGroupController

    public constructor(
        private readonly groupService: GroupServices,
        private readonly membersGroupService: MembersGroupService
    ){
        this.create = new CreateGroupController(this.groupService,this.membersGroupService)
    }
}