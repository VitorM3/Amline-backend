import {ApiPropertyOptional } from "@nestjs/swagger";

export class GetAllUsersDTO{
    @ApiPropertyOptional({
        type:'number',
        description:'Itens por paginas',
        example: 50
    })
    perPage: number

    @ApiPropertyOptional({
        type:'number',
        description:'Número da respectiva pagina que você deseja visualizar',
        example: 1
    })
    page: number

    @ApiPropertyOptional({
        description:'Nome dos respectivos usuários',
        example: 'Edvaldo'
    })
    name: string

    @ApiPropertyOptional({
        description:'Email dos respectivos usuários',
        example: 'evaldo@mail.com'
    })
    email: string
}