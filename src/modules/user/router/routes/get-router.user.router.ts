import {Get,Query,Param} from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
import { UserControllers } from "../../controllers/UserController.user.controller";
import { GetAllUsersDTO } from "../../domain/dto/getallUsers.user.dto";
import { GetOneUserByIdDTO } from "../../domain/dto/getOneUser.user.dto";
import ResponseGetAllUsers from "../../controllers/get-all-users/getAllUsers.user.response";
import ResponseGetUserById from "../../controllers/get-user-byid/getUserById.user.response";
import UserController from "../config/UserControllerDecorator.user.controller";

@UserController()
export class GetRouterUser extends Router{
    public constructor(
        private userController: UserControllers
    ){
        super()
    }

    @Get()
    @ResponseGetAllUsers()
    public async getAllUsers(@Query() filter: GetAllUsersDTO){
        return await this.execute(this.userController.getAllUser,filter)
    }

    @Get(':id')
    @ResponseGetUserById()
    public async getOneByIdUsers(@Param() id: GetOneUserByIdDTO){
        return await this.execute(this.userController.getOneById,id)
    }
}