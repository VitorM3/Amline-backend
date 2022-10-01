import SenderErrorHttp from "src/shared/base/domain/error/SenderErroHttp.base.error";


export default class UserNotFoundError extends SenderErrorHttp{
    public constructor(){
        super({message: 'Usuário não encontrado',status: 404})
    }
}