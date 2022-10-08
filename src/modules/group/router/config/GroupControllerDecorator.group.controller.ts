import { applyDecorators, Controller, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiTags } from "@nestjs/swagger"

const GroupController = () => {
    return applyDecorators(
        Controller('group'),
        ApiTags('Group'),
        UseGuards(AuthGuard('auth'))
    )
}

export default GroupController;