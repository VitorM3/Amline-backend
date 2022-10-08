import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDTO{
    @ApiProperty({
        description: 'Nome do respectivo grupo',
        example:'Joaquim'
    })
    name: string;
}