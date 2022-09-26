import { Injectable } from "@nestjs/common";
import { UserServices } from "../../services/UserServices.service";
import CreateUserRouteController from "./controllers/create-user/createUser.user.controller";

@Injectable()
export class ManageRoutesUser {
    public createUser: CreateUserRouteController
    public constructor(
        private service: UserServices
    ){
        this.createUser = new CreateUserRouteController(this.service)
    }
}