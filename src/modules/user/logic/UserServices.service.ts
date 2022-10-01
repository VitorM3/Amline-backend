import { Injectable } from "@nestjs/common";
import { CreateUserService } from "./services/Create-user.service";
import { GetAllUsersService } from "./services/Get-all-users.users.service";
import GetUserByIdService from "./services/Get-user-byId.users.service";
import { LoginService } from "./services/Login.users.service";
import UserProviders from "./UserProviders.user.providers";

@Injectable()
export class UserServices{
    public login: LoginService
    public create: CreateUserService
    public getAll: GetAllUsersService
    public getOneById: GetUserByIdService
    public constructor(
        private provider: UserProviders
    ){
        this.login = new LoginService(this.provider)
        this.create = new CreateUserService(this.provider)
        this.getAll = new GetAllUsersService(this.provider)
        this.getOneById = new GetUserByIdService(this.provider)
    }
}