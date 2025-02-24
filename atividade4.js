const prompt = require('prompt-sync')();
const teste = [1,2,2,3,4,5,6,7,8,7,7,5,3,'dsf','dsf']//uma constante para fazer os testes

function getUniqueValues(arr){
    resposta = []
    if(Array.isArray(arr)&&arr.length!==0){ //verificar o array
    arr.forEach(cont => {
        if(!resposta.includes(cont)){//somente adiciona a respota os que nao estiverem ainda nao estão nela
            resposta.push(cont)
    }
    })
    return resposta;
}else{
    return 'array não foi encontrado ou sem valor';// se nao for usavel
}
}

console.log(getUniqueValues(teste))