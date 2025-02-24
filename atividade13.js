const prompt = require('prompt-sync')();
const teste = 'hello world'//uma constante para fazer os testes

function countVowels(str){
    if(typeof str !== 'string'){//verifica se nao é string
        return 'valor enviado não é string'
    }
    const vogais = ['a','A','e','E','i','I','o','O','u','U']//constante de vogais para comparação
    let letras = str.split('')//cria uma variavel e dividi a string por letras
    let numVogais = 0//contador de vogais
    letras.forEach(letter => {
        if(vogais.includes(letter))//verifica se é vogal comparando com a lista
            numVogais++//adiciona ao contador
    }); 
    return numVogais;
}
console.log(countVowels(teste))