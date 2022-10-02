
import CreateUserProvider from "./providers/create-user.user.provider";
import DeleteUserProvider from "./providers/delete-user.user.provider";
import { GetUserProvider } from "./providers/get-user.user.provider";
import UpdateUserProvider from "./providers/update-user.user.provider";


const userProviders = [CreateUserProvider,GetUserProvider,UpdateUserProvider,DeleteUserProvider]

export default userProviders