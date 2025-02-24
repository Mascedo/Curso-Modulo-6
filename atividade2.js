const prompt = require('prompt-sync')();

function greeetUsers(arr){
let resposta = []
if(Array.isArray(arr)&&arr!=0){
        let semNumeros = arr.filter(str => isNaN(str)) //tira os numeros do array transformando em um novo sem numeros
        semNumeros.forEach(nome => {
        resposta.push('Seja bem vindo '+ nome.trim())//manda para o array de resposra a saudação
    })
}else{
    return 'array não foi encontrado ou sem valor';//caso não tenha nada no array ou oque foi recebido não seja um array(se mandar um numero ele nao envia essa mensagem e sim um array vazio)
}
return resposta;
}
let lista = prompt('Escreva uma lista de nomes divididos por "," para dar saudação: ')
lista = lista.split(',')
console.log((greeetUsers(lista)))