const teste = 'gosto de açai'//uma constante para fazer os testes

function reverseString(str){
    if(typeof str === 'string'){
        return str.split('').reverse().join('')
    }else{
        return 'não foi enviada uma string'
    }
}
console.log(reverseString(teste))