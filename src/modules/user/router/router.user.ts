import { Body, Post, Get,Query,Param } from "@nestjs/common";
import ExecController from "src/shared/base/controller/ExecControler.base.controler";
import { CreateUserDTO } from "../domain/dto/createUser.user.dto";
import ResponseCreateUser from "./routes/controllers/create-user/createUser.user.response";
import { ManageRoutesUser } from "./routes/Manage.user.routes";
import UserController from "./config/UserControllerDecorator.user.controller";
import { GetAllUsersDTO } from "../domain/dto/getallUsers.user.dto";
import { GetOneUserByIdDTO } from "../domain/dto/getOneUser.user.dto";

@UserController()
export class RouterUser extends ExecController{
    public constructor(
        private manageRoutes: ManageRoutesUser
    ){
        super()
    }

    @Get()
    public async getAllUsers(@Query() filter: GetAllUsersDTO){
        return await this.execute(this.manageRoutes.getAllUser,filter)
    }

    @Get(':id')
    public async getOneByIdUsers(@Param() id: GetOneUserByIdDTO){
        return await this.execute(this.manageRoutes.getOneById,id)
    }

    @Post()
    @ResponseCreateUser()
    public async createUser(@Body() newUser: CreateUserDTO){
        return await this.execute(this.manageRoutes.createUser,newUser)
    }
}