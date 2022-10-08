import { Module } from "@nestjs/common";
import GroupController from "./controllers/GroupController.group.controller";
import groupProvider from "./logic/GroupProvider.group.provider";
import { GroupServices } from "./logic/GroupServices.group.service";
import GroupControllerProvider from "./router/config/GroupControllerProvider.group.controller";
import { MembersGroupModule } from "./submodules/members_group/members-group.module";

@Module({
    imports:[MembersGroupModule],
    providers:
    [
        ...groupProvider,
        GroupServices,
        GroupController
    ],
    controllers:[...GroupControllerProvider],

    exports:[...groupProvider,MembersGroupModule]
})
export default class GroupModule{}