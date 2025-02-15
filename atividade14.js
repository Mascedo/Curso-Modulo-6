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
    if(typeof str !== 'string'){
        return 'valor enviado não é string'
    }
    rDup = removeDuplicates(str.split(''))
    cVow = countVowels(rDup.join(''))
    return cVow;
}
console.log(removeDuplicatesAndCountVowels(teste))