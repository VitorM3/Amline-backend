import { users } from "@prisma/client";

type UserType = Omit<users,'created_at' | 'updated_at' | 'deleted_at' | 'id'>

export default UserType;