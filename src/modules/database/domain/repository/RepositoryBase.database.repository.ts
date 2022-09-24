import ITableBase from "../interface/Table.database.interface";

export class RepositoryBase<T>{

    // SERIALIZE ONE
    protected serializeGet(data: T extends ITableBase ? ITableBase : ITableBase){
        try {
            const newData = data;
            delete newData.created_at;
            delete newData.deleted_at;
            delete newData.updated_at;
            return newData;
        } catch (error) {
            throw error;
        }
    }

    protected serializePost(data: T){
        const newData: ITableBase = {
            ...data,
            created_at: new Date()
        }

        return newData;
    }

    protected serializeUpdate(data:T extends ITableBase ? ITableBase : ITableBase){
        const newData: ITableBase = {
            ...data,
            updated_at: new Date()
        }

        return newData;
    }

    protected serializeDelete(data: T extends ITableBase ? ITableBase : ITableBase){
        const newData: ITableBase = {
            ...data,
            deleted_at: new Date()
        }

        return newData;
    }

    // SERIALIZE MULTIPLE
    
    private async serializeMultiple(datum: any, method: (data: any)=> ITableBase){
        const newData = datum.map((data)=>{
            return method(data)
        })
        const dataSerialized = await Promise.all(newData);

        return dataSerialized
    }

    protected async serializeMultipleGet(data: T[] extends ITableBase[] ? ITableBase[] : ITableBase[]){
        return await this.serializeMultiple(data, this.serializeGet);
    }

    protected async serializeMultiplePost(data: T[]){
        return await this.serializeMultiple(data, this.serializePost);
    }

    protected async serializeMultipleUpdate(data: T[] extends ITableBase[] ? ITableBase[] : ITableBase[]){
        return await this.serializeMultiple(data,this.serializeUpdate);
    }

    protected async serializeMultipleDelete(data: T[] extends ITableBase[] ? ITableBase[] : ITableBase[]){
        return await this.serializeMultiple(data,this.serializeDelete);
    }

}