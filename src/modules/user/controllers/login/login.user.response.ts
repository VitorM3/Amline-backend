import { applyDecorators } from "@nestjs/common"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"

const ResponseLogin = () =>{
    return applyDecorators(
        ApiOperation({summary:'Login de usuário'}),
        ApiResponse({
            status:200,
            description: 'Esta resposta irá ocorrer se tudo houver ocorrido com sucesso, enviando os dados do usuário que realizou o login',
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

export default ResponseLogin