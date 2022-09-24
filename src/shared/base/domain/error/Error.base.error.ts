import HttpReturn from "../types/HttpReturn.base.type";

export default class HttpError {
    public message: string;
    public status: number;
    /**
     * Classe base contendo os atributos de um erro Http 
     * @param HttpReturn Objeto contendo classe e status 
     */
    public constructor({message, status}: HttpReturn) {
        this.message = message;
        this.status = status;
    }
}