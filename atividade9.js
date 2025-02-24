const prompt = require('prompt-sync')();
const teste = 'gosto de açai'//uma constante para fazer os testes

function reverseString(str){
    if(typeof str !== 'string'){//verifica se é uma string
    return 'não foi enviada uma string'
}
    return str.split('').reverse().join('')//inverte a palavra
}

function reverseWordsInSentence(senteça){
    if(typeof senteça !== 'string'){
        return 'não foi enviada uma string'
    }
    resp = []
    let palavra = senteça.split(' ')
    palavra.forEach(word => {//inverte cada palabra na ordem original
        resp += reverseString(word)//inverte a palavra
        resp += ' '//adiciona a frase na ordem original
    });
    return resp.trim();
}
console.log(reverseWordsInSentence(teste))