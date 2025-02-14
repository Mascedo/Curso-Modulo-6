const teste = [1,2,3,4,54,3,3,3,5,6,7,2,1,7,9,5,4,2,'5454das']//uma constante para fazer os testes

function findMax(arr){
    if(Array.isArray(arr)){
        let arrNoAny = arr.filter(str => !isNaN(str))
        return Math.max(...arrNoAny);
    }else{
        return 'array não foi encontrado';
    }
}
console.log((findMax(teste)))