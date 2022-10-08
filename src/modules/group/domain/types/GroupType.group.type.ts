import { groups } from "@prisma/client";

type GroupType = Omit<groups,'created_at'| 'updated_at'|'deleted_at'>

export default GroupType;