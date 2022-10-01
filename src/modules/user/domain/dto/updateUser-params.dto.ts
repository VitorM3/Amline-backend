import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserParamsDTO{
    @ApiProperty({
        description: 'Id do respectivo usuário',
        example:2
    })
    id: number;
}