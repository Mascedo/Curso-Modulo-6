const prompt = require('prompt-sync')();
const teste = [1,2,3,4,54,3,3,3,5,6,7,2,1,7,9,5,4,2,'5454das']//uma constante para fazer os testes

function findMax(arr){
    if(Array.isArray(arr)){
        let arraySemString = arr.filter(str => !isNaN(str))
        return Math.max(...arraySemString);//acho o valor maximo da lista
    }else{
        return 'array não foi encontrado';
    }
}
let lista = prompt('Escreva uma lista de numeros divididos por "," para encontrar o maior valor: ')+','//esta virgula é para impedir de o usuario nao colocar um unico item sem virgula e da erro
lista = lista.split(',')
console.log((findMax(lista))) 