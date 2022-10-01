import { applyDecorators } from "@nestjs/common"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"

const ResponseGetAllUsers = () =>{
    return applyDecorators(
        ApiOperation({summary:'Buscar todos os usuários'}),
        ApiResponse({
            status:200,
            description: 'Esta resposta irá ocorrer se tudo houver ocorrido com sucesso, enviando os dados de todos os usuários cadastrados',
        }),
        ApiResponse({
            status:401,
            description: 'Esta resposta irá ocorrer se o usuário não tiver sido encontrado em nossa base de dados ou não tiver permissão para acessar está funcionalidade',
        }),
        ApiResponse({
            status:500,
            description: 'Esta resposta irá ocorrer se caso ocorrer algum tipo de erro com a API'
        }),
    )
}

export default ResponseGetAllUsers