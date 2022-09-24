import HttpError from "../domain/error/Error.base.error";

export default abstract class Service<T>{
    abstract execute(params?: any): Promise<T | HttpError>
}