import { UserServices } from "../../../../services/UserServices.service";
import {Post,Body, Injectable} from '@nestjs/common'
import { CreateUserDTO } from "../../../../domain/dto/createUser.user.dto";
import Controller from "src/shared/base/controller/Controler.base.controller";
import UserType from "../../../../domain/types/UserType.user.type";
import ErrorBaseError from "src/shared/base/domain/error/Error.base.error";
import FieldNotFoundError from "src/shared/base/domain/error/FieldNotFound.base.error";

@Injectable()
export default class CreateUserRouteController extends Controller<Omit<UserType, 'password'>>{
    public constructor(
        private service: UserServices
    ){
        super()
    }

    async handle(user?: UserType): Promise<Omit<UserType, "password"> | ErrorBaseError> {
        try {
            this.verifyParams(user)
            return await this.execService(user)
        } catch (error) {
            throw error;
        }
    }

    public verifyParams(user?: UserType){
        try {
            if(!user.email){
                throw new FieldNotFoundError('email')
            }
            if(!user.name){
                throw new FieldNotFoundError('nome')
            }
            if(!user.password){
                throw new FieldNotFoundError('senha')
            }
        } catch (error) {
            throw error;
        }
    }

    public async execService(newUser: CreateUserDTO){
        try {
            return await this.service.create
            .setNewUser(newUser)
            .execute()
        } catch (error) {
            throw error;
        }
    }
}