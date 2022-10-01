import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO{
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