import { forwardRef, Inject, Injectable } from "@nestjs/common";
import AuthProviders from "src/modules/auth/logic/AuthProvider.auth.provider";
import { UserServices } from "../logic/UserServices.service";
import CreateUserController from "./create-user/createUser.user.controller";
import DeleteUserController from "./delete-user/delete-user.user.controller";
import { GetAllUsersController } from "./get-all-users/getAllUsers.user.controller";
import GetUserByIdController from "./get-user-byid/getUserById.user.controller";
import { LoginController } from "./login/login.user.controller";
import { UpdateUserController } from "./update-user/updateUser.user.controller";

@Injectable()
export class UserControllers {
    // GET ROUTER
    public getAllUser: GetAllUsersController
    public getOneById: GetUserByIdController

    // POST ROUTER
    public createUser: CreateUserController
    public login: LoginController

    // UPDATE ROUTER
    public update: UpdateUserController

    // DELETE ROUTER
    public delete: DeleteUserController


    public constructor(
        private service: UserServices,
        @Inject(forwardRef(()=>AuthProviders))
        private readonly authProvider: AuthProviders
    ){
        this.getAllUser = new GetAllUsersController(this.service)
        this.getOneById = new GetUserByIdController(this.service)

        this.createUser = new CreateUserController(this.service)
        this.login = new LoginController(this.authProvider)

        this.update = new UpdateUserController(this.service)

        this.delete = new DeleteUserController(this.service)
    }
}