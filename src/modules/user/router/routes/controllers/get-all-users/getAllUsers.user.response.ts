import { applyDecorators } from "@nestjs/common"
import { ApiResponse } from "@nestjs/swagger"

const ResponseCreateUser = () =>{
    return applyDecorators(
        ApiResponse({
            status:200,
            description: 'Esta resposta irá ocorrer se tudo houver ocorrido com sucesso, enviando os dados de todos os usuários cadastrados',
        }),
        ApiResponse({
            status:500,
            description: 'Esta resposta irá ocorrer se caso ocorrer algum tipo de erro com a API'
        }),
    )
}

export default ResponseCreateUser