
import { Delete, Param } from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
import { UserControllers } from "../../controllers/UserController.user.controller";
import { DeleteUserDTO } from "../../domain/dto/deleteUser.user.dto";
import UserController from "../config/UserControllerDecorator.user.controller";

@UserController()
export default class DeleteRouterUser extends Router{
    public constructor(
        private readonly userController: UserControllers
    ){
        super()
    }

    @Delete(':id')
    public async deleteUser(@Param() {id}: DeleteUserDTO){
        return await this.execute(this.userController.delete, id)
    }
}