import { forwardRef, Module } from "@nestjs/common";
import { UserControllers } from "./controllers/UserController.user.controller";
import UserControllerProvider from "./router/config/UserControllerProvider.user.controller";
import userProviders from "./logic/UserProviders.user.providers";
import { UserServices } from "./logic/UserServices.service";
import { LoginService } from "./logic/services/Login.users.service";
import AuthModule from "../auth/auth.module";

@Module({
    imports:[forwardRef(()=>AuthModule)],
    controllers:[...UserControllerProvider],
    providers:[...userProviders,UserServices,UserControllers,LoginService],
    exports:[...userProviders, LoginService]
})
export default class UserModule{}