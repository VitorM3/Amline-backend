import { forwardRef, Module } from "@nestjs/common";
import { UserControllers } from "./controllers/UserController.user.controller";
import UserControllerProvider from "./router/config/UserControllerProvider.user.controller";
import UserProviders from "./logic/UserProviders.user.providers";
import { UserServices } from "./logic/UserServices.service";
import { LoginService } from "./logic/services/Login.users.service";
import AuthModule from "../auth/auth.module";

@Module({
    imports:[forwardRef(()=>AuthModule)],
    controllers:[...UserControllerProvider],
    providers:[UserProviders,UserServices,UserControllers,LoginService],
    exports:[UserProviders, LoginService]
})
export default class UserModule{}