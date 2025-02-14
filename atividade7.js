const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dasdsa','sdaa']//uma constante para fazer os testes

function getEvenNumbers(arr){
    if(!Array.isArray(arr)||arr==0){
        return 'array não foi encontrado ou sem valor'
    }
    arr = arr.filter(str => !isNaN(str))
    par = []
    arr.forEach(num => {
        if(num%2==0){
            par.push(num)
        }
    });
    return par;
}
console.log(getEvenNumbers(teste))