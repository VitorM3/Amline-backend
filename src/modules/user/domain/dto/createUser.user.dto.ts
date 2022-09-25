import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO{
    @ApiProperty({
        description: 'Nome do respectivo usuário',
        example:'Joaquim'
    })
    name: string;

    @ApiProperty({
        description:'Email do usuário',
        example:'joaquim@mail.com'
    })
    email: string;

    @ApiProperty({
        description:'Senha do usuário',
        example:'12345batatinha'
    })
    password: string;
}