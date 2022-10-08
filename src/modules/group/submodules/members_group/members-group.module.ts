import { Module } from "@nestjs/common";
import { MembersGroupService } from "./logic/MembersGroup.members.group.service";
import membersGroupProvider from "./logic/MembersGroupProvider.group.provider";

@Module({
    providers:[...membersGroupProvider,MembersGroupService],
    exports:[...membersGroupProvider,MembersGroupService]
})
export class MembersGroupModule{}