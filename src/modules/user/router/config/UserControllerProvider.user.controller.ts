import { GetRouterUser } from "../routes/get-router.user.router";
import { PostRouterUser } from "../routes/post-router.user.router";

const UserControllerProvider = [GetRouterUser,PostRouterUser]

export default UserControllerProvider;