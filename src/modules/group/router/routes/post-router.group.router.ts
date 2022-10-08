import { Body, Post } from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
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
    public async create(@Body() {name}: CreateGroupDTO){
        return await this.execute(this.groupController.create,{name})
    }
}