const prompt = require('prompt-sync')();
function getEvenNumbers(arr){
    par = []
    for(let i = 1; i <=arr; i++){//retorna os primeiro numeros pares
        if(i%2===0){
            par.push(i)
        }
    }
    return par;
}
function drawTriangle(tr) {
    tri = [] 
     for (let i = 1; i <= tr; i++) {
         let ast = '*'.repeat(i);
         tri.push(ast)
     }
     return tri;
}
function drawEvenNumberTriangle(trr){
    if(!Number(trr)||trr.length===0){//verificador de numeros
        return 'Valor não encontrado!'
    }
    let par = getEvenNumbers(trr*2)
    let semiDraw = drawTriangle(trr)
    for (let i = 0; i<= Math.floor(trr); i++){
        if (i < par.length) {//troca os * por numeros
            semiDraw[i] = par[i].toString().repeat(semiDraw[i].length)
        }
    }
    return semiDraw.join('\n')//junta separando quebrando linha
}
let numero = Number(prompt('Escreva uma numero para ser a altura do triangulo e ser os tijolos da piramide: '))
console.log((drawEvenNumberTriangle(numero))) 