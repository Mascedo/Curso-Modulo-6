const prompt = require('prompt-sync')();
const teste = 'açai'//uma constante para fazer os testes

function reverseString(str){
    if(typeof str !== 'string'){//verifica se o dado enviado é uma string
    return 'não foi enviada uma string'
}
        return str.split('').reverse().join('')//dividi por palavra, inverte o array criado pelo split e junta tudo em uma string
}
console.log(reverseString(teste))