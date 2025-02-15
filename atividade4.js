const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dsf','dsf']//uma constante para fazer os testes

function getUniqueValues(arr){
    resp = []
    if(Array.isArray(arr)&&arr.length!==0){ 
    arr.forEach(cont => {
        if(!resp.includes(cont)){
            resp.push(cont)
    }
    })
    return resp;
}else{
    return 'array não foi encontrado ou sem valor';
}
}

console.log(getUniqueValues(teste))