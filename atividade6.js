const prompt = require('prompt-sync')();
const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dasdsa','sdaa']//uma constante para fazer os testes

function getOddNumbers(arr){
    if(!Array.isArray(arr)||arr.length===0){// verifica se nao é array e manda mensagem
        return 'array não foi encontrado ou sem valor'
    }
    arr = arr.filter(str => !isNaN(str))
    let impar = []//cria um array somente com numeros impar
    arr.forEach(num => {//para cada numero
        if(num%2!==0){//caucula se é impar
            impar.push(num)
        }
    });
    return impar;
}
console.log(getOddNumbers(teste))