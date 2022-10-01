import { Injectable } from "@nestjs/common";
import CreateUserProvider from "./providers/create-user.user.provider";
import { GetUserProvider } from "./providers/get-user.user.provider";

@Injectable()
export default class UserProviders {
    public post: CreateUserProvider
    public get: GetUserProvider
    public constructor(){
        this.post = new CreateUserProvider();
        this.get = new GetUserProvider();
    }
}