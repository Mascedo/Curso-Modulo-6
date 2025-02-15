const teste = 'hello world'//uma constante para fazer os testes

function countVowels(str){
    if(typeof str !== 'string'){
        return 'valor enviado não é string'
    }
    const vogais = ['a','A','e','E','i','I','o','O','u','U']
    let letras = str.split('')
    let numVogais = 0
    letras.forEach(letter => {
        if(vogais.includes(letter))
            numVogais++
    }); 
    return numVogais;
}
console.log(countVowels(teste))