const prompt = require('prompt-sync')();

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
    if(impar.length===0){// verifica se nao o array esta preenchido
        return 'sem valor util ou  sem numeros impar'
    }
    return impar;
}
let lista = prompt('Escreva uma lista de numeros divididos por "," para encontrar os numeros impar: ')+','//esta virgula é para impedir de o usuario nao colocar um unico item sem virgula e da erro
lista = lista.split(',')
console.log((getOddNumbers(lista))) 