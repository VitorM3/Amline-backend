import SenderErrorHttp from "src/shared/base/domain/error/SenderErroHttp.base.error";


export default class UserNotAuthError extends SenderErrorHttp{
    public constructor(){
        super({message: 'Usuário não autorizado á realizar está operação',status: 401})
    }
}