const prompt = require('prompt-sync')();

function removeDuplicates(arr){
    if(!Array.isArray(arr)||arr.length===0){//verificador 
        return 'valores nao encontrados'
    }
    let resp = []
   
    arr.forEach(strnum => {
        if(!resp.includes(strnum)){//so coloca se nao estiver no array resp
            resp.push(strnum)
        }
    });
    return resp;
}
let lista = prompt('Escreva uma lista com itens divididos por "," para retirar valores repetidos: ')
lista = lista.split(',')
console.log((removeDuplicates(lista)))