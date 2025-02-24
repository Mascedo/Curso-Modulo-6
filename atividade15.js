const prompt = require('prompt-sync')();
const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,]//uma constante para fazer os testes

function removeDuplicates(arr){
    let resp = []
   
    arr.forEach(strnum => {
        if(!resp.includes(strnum)){//coloca somente oque nao estão adicionados
            resp.push(strnum)
        }
    });
    return resp;
}
function sortUniqueNumbers(nums){
    if(!Array.isArray(nums)||nums.length===0){//verificador de array
        return 'valores nao encontrados'
    }
    let resp =[]
    nums = nums.filter(numero => !isNaN(numero))
    resp += removeDuplicates(nums.sort())//soma na resposta o valor e ordena
    if(resp.trim().length === 0){
        return 'Valores invalidos'
    }
    return resp;
}
let lista = prompt('Escreva uma lista de numeros divididos por "," para sortear os numeros unicos: ')
lista = lista.split(',')
console.log((sortUniqueNumbers(lista)))