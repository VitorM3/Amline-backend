import { HttpException } from "@nestjs/common";
import HttpError from "../domain/error/Error.base.error";
import Controller from "./Controler.base.controller";

export default class ExecController{
    async execute(controller: Controller<any>, params?: any){
        try {
        return await controller.handle(params)
            
        } catch (error) {
            if(error.status == 500){
                console.error(error.message)
            }
            throw new HttpException(error.message, error.status)
        }
    }
}