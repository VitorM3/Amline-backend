import SenderErrorHttp from "./SenderErroHttp.base.error";

export default class FieldNotFoundError extends SenderErrorHttp{

    public constructor(field: string){
        super({message: `O campo ${field} não foi encontrado`,status: 404})
    }
}