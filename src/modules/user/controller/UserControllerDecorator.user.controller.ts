import { applyDecorators,Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const UserController = () =>{
    return applyDecorators(
        Controller('user'),
        ApiTags('Users')
    )
}

export default UserController;