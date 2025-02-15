const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,]//uma constante para fazer os testes

function removeDuplicates(arr){
    let resp = []
   
    arr.forEach(strnum => {
        if(!resp.includes(strnum)){
            resp.push(strnum)
        }
    });
    return resp;
}
function sortUniqueNumbers(nums){
    if(!Array.isArray(nums)||nums.length===0){
        return 'valores nao encontrados'
    }
    let resp =[]
    resp += removeDuplicates(nums.sort())
    return resp;
}
console.log(sortUniqueNumbers(teste))