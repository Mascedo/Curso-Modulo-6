const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dasdsa','sdaa']//uma constante para fazer os testes

function getOddNumbers(arr){
    arr = arr.filter(str => !isNaN(str))
    impar = []
    if(!Array.isArray(arr)||arr==0){
        return 'array não foi encontrado ou sem valor'
    }
    arr.forEach(num => {
        if(num%2!==0){
            impar.push(num)
        }
    });
    return impar;
}
console.log(getOddNumbers(teste))