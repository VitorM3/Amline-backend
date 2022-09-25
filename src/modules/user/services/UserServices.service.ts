import { Injectable } from "@nestjs/common";
import { CreateUserService } from "./Create-user.service";
import UserProviders from "./providers/UserProviders.user.providers";

@Injectable()
export class UserServices{
    public create: CreateUserService
    public constructor(
        private provider: UserProviders
    ){
        this.create = new CreateUserService(this.provider)
    }
}