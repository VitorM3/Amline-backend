import ITableBase from "../interface/Table.database.interface";

export class RepositoryBase<T>{

    public serializePost(data: T){
        const newData: ITableBase = {
            ...data,
            created_at: new Date()
        }

        return newData;
    }

    public serializeUpdate(data:T extends ITableBase ? ITableBase : ITableBase){
        const newData: ITableBase = {
            ...data,
            updated_at: new Date()
        }

        return newData;
    }

    public serializeDelete(data: T extends ITableBase ? ITableBase : ITableBase){
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

    public async serializeMultiplePost(data: T[]){
        return await this.serializeMultiple(data, this.serializePost);
    }

    public async serializeMultipleUpdate(data: T[] extends ITableBase[] ? ITableBase[] : ITableBase[]){
        return await this.serializeMultiple(data,this.serializeUpdate);
    }

    public async serializeMultipleDelete(data: T[] extends ITableBase[] ? ITableBase[] : ITableBase[]){
        return await this.serializeMultiple(data,this.serializeDelete);
    }

}