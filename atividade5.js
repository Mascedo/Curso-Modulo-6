const prompt = require('prompt-sync')();
const teste = 11//uma constante para fazer os testes

function isPrime(num){
    
if(typeof num == 'number'&&num>2){//verifica se é numero e se é maior que dois
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
    }
}
}else{
    return 'numero não foi encontrado ou valor invalido para caucular';//caso nao for usavel para o calculo ele envia esta mensagem
}
return true;
}
let numero = Number(prompt('Escreva uma numero para verificar se é primo: '))
console.log((isPrime(numero))) 