import DeleteRouterUser from "../routes/delete-router.user.router";
import { GetRouterUser } from "../routes/get-router.user.router";
import { PostRouterUser } from "../routes/post-router.user.router";
import { UpdateRouterUser } from "../routes/update-router.user.router";

const UserControllerProvider = [GetRouterUser,PostRouterUser,UpdateRouterUser,DeleteRouterUser]

export default UserControllerProvider;