import { Body, Post,UseGuards, Res, Req } from "@nestjs/common";
import Router from "src/shared/base/controller/ExecControler.base.controler";
import { CreateUserDTO } from "../../domain/dto/createUser.user.dto";
import ResponseCreateUser from "../../controllers/create-user/createUser.user.response";
import { UserControllers } from "../../controllers/UserController.user.controller";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { LoginDTO } from "../../domain/dto/login.user.dto";
import ResponseLogin from "../../controllers/login/login.user.response";
import UserControllerWithoutGuard from "../config/UserControllerDecoratorWithoutGuard.user.controller";

@UserControllerWithoutGuard()
export class PostRouterUser extends Router{
    public constructor(
        private userController: UserControllers
    ){
        super()
    }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    @ResponseLogin()
    public async login
    (
        @Res({ passthrough: true }) res: Response, 
        @Req() req: Request, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        @Body() user: LoginDTO){
        return await this.execute(this.userController.login,{res,req})
    }

    @Post()
    @ResponseCreateUser()
    public async createUser(@Body() newUser: CreateUserDTO){
        return await this.execute(this.userController.createUser,newUser)
    }
}