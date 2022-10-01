import { applyDecorators,Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const UserControllerWithoutGuard = () =>{
    return applyDecorators(
        Controller('user'),
        ApiTags('Users')
    )
}

export default UserControllerWithoutGuard;