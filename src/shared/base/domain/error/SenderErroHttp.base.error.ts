import HttpReturn from "../types/HttpReturn.base.type";
import HttpError from "./Error.base.error"

export default class SenderErrorHttp {
    private message: string
    private status: number
    /**
     * Classe para enviar erros em requisições HTTP
     * @param HttpReturn Objeto com mensagem e status do respectivo erro
     */
    public constructor({message, status}: HttpReturn){
        this.message = message;
        this.status = status;
    }

    public sendError(){
        try {
            return new HttpError(
            {
                message: this.message,
                status:this.status
            })
        } catch (error) {
            console.error('Ocorreu um erro ao gerar um erro de servidor')
            throw error;
        }
    }

}