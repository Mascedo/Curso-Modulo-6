const teste = 'gosto de açai'//uma constante para fazer os testes

function reverseString(str){
    if(typeof str !== 'string'){
    return 'não foi enviada uma string'
}
    return str.split('').reverse().join('')
}

function reverseWordsInSentence(str){
    if(typeof str !== 'string'){
        return 'não foi enviada uma string'
    }
    resp = []
    let palavra = str.split(' ')
    palavra.forEach(word => {
        resp += reverseString(word)
        resp += ' '
    });
    return resp.trim();
}
console.log(reverseWordsInSentence(teste))