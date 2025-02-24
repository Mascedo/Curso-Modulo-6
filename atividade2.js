const prompt = require('prompt-sync')();
const teste = ['joão','cleiton','felipe','23', 32,]//uma constante para fazer os testes

function greeetUsers(arr){
let resposta = []
if(Array.isArray(arr)&&arr!=0){
        let semNumeros = arr.filter(str => isNaN(str)) //tira os numeros do array transformando em um novo sem numeros
        semNumeros.forEach(nome => {
        resposta.push('Seja bem vindo '+ nome)//manda para o array de resposra a saudação
    })
}else{
    return 'array não foi encontrado ou sem valor';//caso não tenha nada no array ou oque foi recebido não seja um array(se mandar um numero ele nao envia essa mensagem e sim um array vazio)
}
return resposta;
}

console.log(greeetUsers(teste))
//opa, eu fiquei em duvida entre retornar um array ou mandar a mensagem diretamente no console, como você viu eu decidi o array,
//porque achei que seria o melhor para uma utilização real.