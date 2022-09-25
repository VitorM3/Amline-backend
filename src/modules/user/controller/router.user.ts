import { Body, Post } from "@nestjs/common";
import ExecController from "src/shared/base/controller/ExecControler.base.controler";
import { CreateUserDTO } from "../domain/dto/createUser.user.dto";
import { ManageRoutesUser } from "./routes/Manage.user.routes";
import UserController from "./UserControllerDecorator.user.controller";

@UserController()
export class RouterUser extends ExecController{
    public constructor(
        private manageRoutes: ManageRoutesUser
    ){
        super()
    }

    @Post()
    public async createUser(@Body() newUser: CreateUserDTO){
        return await this.execute(this.manageRoutes.createUser,newUser)
    }
}