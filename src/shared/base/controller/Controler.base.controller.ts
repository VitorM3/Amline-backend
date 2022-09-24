import HttpError from "../domain/error/Error.base.error";

export default abstract class Controller<T> {
    abstract handle(params?: any): Promise<T | HttpError>;
}