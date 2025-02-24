const prompt = require('prompt-sync')();
const teste = 'hello world'//uma constante para fazer os testes

function removeDuplicates(arr){
    let resp = []
    arr.forEach(strnum => {
        if(!resp.includes(strnum)){
            resp.push(strnum)
        }
    });
    return resp;
}

function countVowels(str){
    const vogais = ['a','A','e','E','i','I','o','O','u','U']
    let letras = str.split('')
    let numVogais = 0
    letras.forEach(letter => {
        if(vogais.includes(letter))
            numVogais++
    }); 
    return numVogais;
}

function removeDuplicatesAndCountVowels(str){
    if(typeof str !== 'string'){//verfica se nao é string
        return 'valor enviado não é string'
    }
    removerDuplicadas = removeDuplicates(str.split(''))//remove as duplicadas da frase
    contarVogais = countVowels(rDup.join(''))//conta as vogais
    return contarVogais;
}
console.log(removeDuplicatesAndCountVowels(teste))