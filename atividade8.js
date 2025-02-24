const prompt = require('prompt-sync')();
const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dasdsa','sdaa']//uma constante para fazer os testes

function sumOfUniqueEvenNumbers(arr){
    if(!Array.isArray(arr)||arr.length===0){//verifica o array
        return 'array não foi encontrado ou sem valor'
    }
    arr = arr.filter(str => !isNaN(str))//tira tudo que nao é numero
    par = []
    total = 0
    arr.forEach(num => {
        if(num%2==0&&!par.includes(num)){//adiciona somente se for para e nao ja estiver na lista
            par.push(num)//adiciona ao array par
        }
    });
    par.forEach(num => total += num);//soma todos os numero do array par
    return total;
}
console.log(sumOfUniqueEvenNumbers(teste))