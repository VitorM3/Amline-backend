import { Request, Response } from "express"
import UserType from "./UserType.user.type"

type LoginControllerParams = {
    req: Request,
    res: Response,
}

export default LoginControllerParams;