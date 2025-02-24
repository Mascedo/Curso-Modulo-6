const prompt = require('prompt-sync')();

function getEvenNumbers(arr){
    if(!Array.isArray(arr)||arr.length===0){
        return 'array não foi encontrado ou sem valor'
    }
    arr = arr.filter(str => !isNaN(str))
    let par = []// array para armezenar numeros par
    arr.forEach(num => {
        if(num%2==0&&num!=0){ //caucula se é par
            par.push(num)
        }
    });
    if(par.length===0){// verifica se nao o array esta preenchido
        return 'sem valor util ou  sem numeros par'
    }
    return par;
}
let lista = prompt('Escreva uma lista de numeros divididos por "," para encontrar os numeros par: ')
lista = lista.split(',')
console.log((getEvenNumbers(lista))) 