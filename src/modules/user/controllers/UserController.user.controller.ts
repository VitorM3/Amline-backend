import { forwardRef, Inject, Injectable } from "@nestjs/common";
import AuthProviders from "src/modules/auth/logic/AuthProvider.auth.provider";
import { UserServices } from "../logic/UserServices.service";
import CreateUserController from "./create-user/createUser.user.controller";
import { GetAllUsersController } from "./get-all-users/getAllUsers.user.controller";
import GetUserByIdController from "./get-user-byid/getUserById.user.controller";
import { LoginController } from "./login/login.user.controller";

@Injectable()
export class UserControllers {
    public createUser: CreateUserController
    public getAllUser: GetAllUsersController
    public getOneById: GetUserByIdController
    public login: LoginController
    public constructor(
        private service: UserServices,
        @Inject(forwardRef(()=>AuthProviders))
        private readonly authProvider: AuthProviders
    ){
        this.createUser = new CreateUserController(this.service)
        this.getAllUser = new GetAllUsersController(this.service)
        this.getOneById = new GetUserByIdController(this.service)
        this.login = new LoginController(this.authProvider)
    }
}