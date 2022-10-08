import { Injectable } from "@nestjs/common";
import { AddMemberInGroupService } from "./services/add-member.member.group.service";

@Injectable()
export class MembersGroupService{
    public addMember: AddMemberInGroupService
    public constructor(){
        this.addMember = new AddMemberInGroupService()
    }
}