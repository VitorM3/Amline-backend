import { HttpException } from "@nestjs/common";
import HttpError from "../domain/error/Error.base.error";
import Controller from "./Controler.base.controller";

export default class ExecController{
    async execute(controller: Controller<any>){
        try {
            const responseController = controller.handle()

            if(responseController instanceof HttpError){
                if(responseController.status == 500){
                    console.error(responseController.message)
                }
                throw new HttpException(responseController.message, responseController.status)
            }
            
        } catch (error) {
            console.error(error)
            throw new HttpException(error.message, 500)
        }
    }
}