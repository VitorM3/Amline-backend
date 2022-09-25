import SenderErrorHttp from "src/shared/base/domain/error/SenderErroHttp.base.error";


export default class EmailExistError extends SenderErrorHttp{
    public constructor(){
        super({message: 'Email já encontrado em nosso sistema, tente outro',status: 409})
    }
}