import SenderErrorHttp from "./SenderErroHttp.base.error";

export default class InternalServerError extends SenderErrorHttp{
    /**
     * Classe para enviar erros http envolvendo o servidor
     * @param message Mensagem de erro
     */
    public constructor(){
        super({message:"Ocorreu um erro em nosso servidor",status: 500})
    }
}