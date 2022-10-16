import { Body, Post, Request } from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
import ResponseCreateGroup from "../../controllers/create-group/createGorup.group.response";
import GroupControllers from "../../controllers/GroupController.group.controller";
import { CreateGroupDTO } from "../../domain/dto/CreateGroup.group.dto";
import GroupController from "../config/GroupControllerDecorator.group.controller";

@GroupController()
export default class PostRouterGroup extends Router{
    public constructor(
        private readonly groupController: GroupControllers
    ){
        super()
    }


    @Post()
    @ResponseCreateGroup()
    public async create(@Body() {name}: CreateGroupDTO, @Request() req: Request){
        return await this.execute(this.groupController.create,{name,req})
    }
}