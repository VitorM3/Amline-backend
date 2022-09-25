import { Module } from "@nestjs/common";
import { ManageRoutesUser } from "./controller/routes/Manage.user.routes";
import UserControllerProvider from "./controller/UserControllerProvider.user.controller";
import UserProviders from "./services/providers/UserProviders.user.providers";
import { UserServices } from "./services/UserServices.service";

@Module({
    controllers:[...UserControllerProvider],
    providers:[UserProviders,UserServices,ManageRoutesUser],
    exports:[UserProviders]
})
export default class UserModule{}