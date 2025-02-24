const prompt = require('prompt-sync')();

function getUniqueValues(arr){
    resposta = []
    if(Array.isArray(arr)&&arr.length!==0){ //verificar o array
    arr.forEach(cont => {
        if(!resposta.includes(cont)){//somente adiciona a respota os que nao estiverem ainda nao estão nela
            resposta.push(cont)
    }
    })
    return resposta;
}else{
    return 'array não foi encontrado ou sem valor';// se nao for usavel
}
}
let lista = prompt('Escreva uma lista com itens divididos por "," para retirar valores repetidos: ')
lista = lista.split(',')
console.log((getUniqueValues(lista)))