import { applyDecorators } from "@nestjs/common"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"

const ResponseGetUserById = () =>{
    return applyDecorators(
        ApiOperation({summary:'Buscar apenas um usuário com base no id passado'}),
        ApiResponse({
            status:200,
            description: 'Esta resposta irá ocorrer se tudo houver ocorrido com sucesso, enviando os dados de um usuário especifico com base no id passado',
        }),
        ApiResponse({
            status:500,
            description: 'Esta resposta irá ocorrer se caso ocorrer algum tipo de erro com a API'
        }),
    )
}

export default ResponseGetUserById