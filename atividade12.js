const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dasdsa','sdaa','dasdsa']//uma constante para fazer os testes

function removeDuplicates(arr){
    if(!Array.isArray(arr)||arr.length===0){
        return 'valores nao encontrados'
    }
    let resp = []
   
    arr.forEach(strnum => {
        if(!resp.includes(strnum)){
            resp.push(strnum)
        }
    });
    return resp;
}
console.log(removeDuplicates(teste))