import { Injectable } from "@nestjs/common";
import { CreateGroupService } from "./services/Create-group.group.service";

@Injectable()
export class GroupServices{
    public create: CreateGroupService
    public constructor(){
        this.create = new CreateGroupService()
    }
}