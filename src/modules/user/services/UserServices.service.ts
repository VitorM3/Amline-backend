import { Injectable } from "@nestjs/common";
import { CreateUserService } from "./services/Create-user.service";
import { GetAllUsersService } from "./services/Get-all-users.users.service";
import UserProviders from "./UserProviders.user.providers";

@Injectable()
export class UserServices{
    public create: CreateUserService
    public getAll: GetAllUsersService
    public constructor(
        private provider: UserProviders
    ){
        this.create = new CreateUserService(this.provider)
        this.getAll = new GetAllUsersService(this.provider)
    }
}