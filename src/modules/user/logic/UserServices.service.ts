import { Injectable } from "@nestjs/common";
import { CreateUserService } from "./services/Create-user.service";
import { DeleteUserService } from "./services/Delete-user.user.service";
import { GetAllUsersService } from "./services/Get-all-users.users.service";
import GetUserByIdService from "./services/Get-user-byId.users.service";
import { LoginService } from "./services/Login.users.service";
import UpdateUserService from "./services/Update-user.service";

@Injectable()
export class UserServices{
    public login: LoginService
    public create: CreateUserService

    public getAll: GetAllUsersService
    public getOneById: GetUserByIdService

    public update: UpdateUserService

    public delete: DeleteUserService

    public constructor(){
        this.login = new LoginService()
        this.create = new CreateUserService()

        this.getAll = new GetAllUsersService()
        this.getOneById = new GetUserByIdService()

        this.update = new UpdateUserService()

        this.delete = new DeleteUserService()
    }
}