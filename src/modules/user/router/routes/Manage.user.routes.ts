import { Injectable } from "@nestjs/common";
import { UserServices } from "../../services/UserServices.service";
import CreateUserController from "./controllers/create-user/createUser.user.controller";
import { GetAllUsersController } from "./controllers/get-all-users/getAllUsers.user.controller";

@Injectable()
export class ManageRoutesUser {
    public createUser: CreateUserController
    public getAllUser: GetAllUsersController
    public constructor(
        private service: UserServices
    ){
        this.createUser = new CreateUserController(this.service)
        this.getAllUser = new GetAllUsersController(this.service)
    }
}