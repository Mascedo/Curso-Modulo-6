const teste = 8//uma constante para fazer os testes

function isPrime(num){
    
if(typeof num == 'number'&&num>2){
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
    }
}
}else{
    return 'numero não foi encontrado ou valor invalido para caucular';
}
return true;
}

console.log(isPrime(teste))