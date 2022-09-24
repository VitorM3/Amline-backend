import SenderErrorHttp from "./SenderErroHttp.base.error";

export default class InternalServerError extends SenderErrorHttp{
    /**
     * Classe para enviar erros http envolvendo o servidor
     * @param message Mensagem de erro
     */
    public constructor(message: string){
        super({message,status: 500})
    }
}