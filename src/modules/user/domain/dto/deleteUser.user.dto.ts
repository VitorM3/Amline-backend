import { ApiPropertyOptional } from "@nestjs/swagger";

export class DeleteUserDTO{
    @ApiPropertyOptional({
        type:'number',
        description:'Id do respectivo usuário',
        example: 2
    })
    id: number
}