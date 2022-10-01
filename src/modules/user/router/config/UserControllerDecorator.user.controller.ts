import { applyDecorators,Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

const UserController = () =>{
    return applyDecorators(
        Controller('user'),
        ApiTags('Users'),
        UseGuards(AuthGuard('auth'))
    )
}

export default UserController;