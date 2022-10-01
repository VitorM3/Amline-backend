import { UserServices } from "../../logic/UserServices.service";
import {Injectable} from '@nestjs/common'
import { CreateUserDTO } from "../../domain/dto/createUser.user.dto";
import Controller from "src/shared/base/controller/Controler.base.controller";
import UserType from "../../domain/types/UserType.user.type";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import FieldNotFoundError from "src/shared/base/domain/error/FieldNotFound.base.error";

@Injectable()
export default class CreateUserController extends Controller<Omit<UserType, 'password'>>{
    public constructor(
        private service: UserServices
    ){
        super()
    }

    async handle(user: CreateUserDTO): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            this.verifyParams(user)
            return await this.createUserService(user)
        } catch (error) {
            throw error;
        }
    }

    private verifyParams(user: CreateUserDTO){
        try {
            if(!user.email){
                throw new FieldNotFoundError('email').sendError()
            }
            if(!user.name){
                throw new FieldNotFoundError('nome').sendError()
            }
            if(!user.password){
                throw new FieldNotFoundError('senha').sendError()
            }
        } catch (error) {
            throw error;
        }
    }

    private async createUserService(newUser: CreateUserDTO){
        try {
            return await this.service.create
            .setNewUser(newUser)
            .execute()
        } catch (error) {
            throw error;
        }
    }
}