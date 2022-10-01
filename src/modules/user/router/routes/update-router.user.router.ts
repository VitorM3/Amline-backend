import { Body, Param, Patch } from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
import ResponseUpdateUser from "../../controllers/update-user/updateUser.user.response";
import { UserControllers } from "../../controllers/UserController.user.controller";
import { UpdateUserBodyDTO } from "../../domain/dto/updateUser-body.dto";
import { UpdateUserParamsDTO } from "../../domain/dto/updateUser-params.dto";
import UserController from "../config/UserControllerDecorator.user.controller";

@UserController()
export class UpdateRouterUser extends Router{
    public constructor(
        private readonly userController: UserControllers
    ){
        super()
    }

    @Patch(':id')
    @ResponseUpdateUser()
    public async updateUser
    (
        @Param(){id}:UpdateUserParamsDTO,
        @Body(){name,email}:UpdateUserBodyDTO
    ){
        return await this.execute(this.userController.update,{id,name,email})
    }
}