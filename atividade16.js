const prompt = require('prompt-sync')();
function drawTriangle(tr) {
    if(Number(tr)){
   tri = [] 
    for (let i = 1; i <= tr; i++) {//qiantidade de vezes de repetir o processo
        let ast = '*'.repeat(i);//desenhador
        tri.push(ast)
    }
    return tri.join('\n');//adiciona com quebra linha
}else{
    return 'O valor enviado nao é um numero!'
}
}
let numero = Number(prompt('Escreva uma numero para ser a altura do triangulo: '))
console.log((drawTriangle(numero))) 