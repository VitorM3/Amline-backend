import { applyDecorators } from "@nestjs/common"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"

const ResponseCreateUser = () =>{
    return applyDecorators(
        ApiOperation({summary:'Cadastrar usuário'}),
        ApiResponse({
            status:200,
            description: 'Esta resposta irá ocorrer se tudo houver ocorrido com sucesso, enviando os dados do usuário cadastrado',
        }),
        ApiResponse({
            status:404,
            description: 'Esta resposta irá ocorrer se caso um dos campos não for encontrado ou se a respectiva rota não for encontrada'
        }),
        ApiResponse({
            status:409,
            description: 'Esta resposta irá ocorrer se caso o email inserido já houver sido cadastrado por outro usuário'
        }),
        ApiResponse({
            status:500,
            description: 'Esta resposta irá ocorrer se caso ocorrer algum tipo de erro com a API'
        }),
    )
}

export default ResponseCreateUser