const prompt = require('prompt-sync')();

function countVowels(str){
    if(typeof str !== 'string'){//verifica se nao é string
        return 'valor enviado não é string'
    }
    const vogais = ['a','A','e','E','i','I','o','O','u','U']//constante de vogais para comparação
    let letras = str.split('')//cria uma variavel e dividi a string por letras
    let numerosVogais = 0//contador de vogais
    letras.forEach(letter => {
        if(vogais.includes(letter))//verifica se é vogal comparando com a lista
            numerosVogais++//adiciona ao contador
    }); 
    return numerosVogais;
}
let palavra = prompt('Escreva uma palavra para contar as vogais: ')
console.log((countVowels(palavra)))