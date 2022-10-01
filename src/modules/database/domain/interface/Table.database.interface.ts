import { Prisma } from "@prisma/client";

export default interface ITableBase{
    created_at: string | Prisma.DateTimeFieldUpdateOperationsInput;
    updated_at?: Date;
    deleted_at?: Date;
}