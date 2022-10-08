import { Request } from "express"

type CreateGroupParams = {
    name: string
    req: Request
}

export default CreateGroupParams