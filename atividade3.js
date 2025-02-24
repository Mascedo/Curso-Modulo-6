const prompt = require('prompt-sync')();

function reverseString(str){
    if(typeof str !== 'string'){//verifica se o dado enviado é uma string
    return 'não foi enviada uma string'
}
        return str.split('').reverse().join('')//dividi por palavra, inverte o array criado pelo split e junta tudo em uma string
}
let palavra = prompt('Escreva uma palavra para inverter: ')
console.log((reverseString(palavra))) 