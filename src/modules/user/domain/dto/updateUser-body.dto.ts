import {ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserBodyDTO{
    @ApiPropertyOptional({
        description: 'Nome do respectivo usuário',
        example:'Joaquim'
    })
    name?: string;

    @ApiPropertyOptional({
        description:'Email do usuário',
        example:'joaquim@mail.com'
    })
    email?: string;

}