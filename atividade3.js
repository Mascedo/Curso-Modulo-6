const teste = 'açai'//uma constante para fazer os testes

function reverseString(str){
    if(typeof str !== 'string'){
    return 'não foi enviada uma string'
}
        return str.split('').reverse().join('')
}
console.log(reverseString(teste))