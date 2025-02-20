function getEvenNumbers(arr){
    par = []
    for(let i = 1; i <=arr; i++){
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
    if(typeof trr !== 'number'||trr.length===0){
        return 'Valora não encontrado!'
    }
    let par = getEvenNumbers(trr*2)
    let semiDraw = drawTriangle(trr)
    for (let i = 0; i<= Math.floor(trr); i++){
        if (i < par.length) {
            semiDraw[i] = par[i].toString().repeat(semiDraw[i].length)
        }
    }
    return semiDraw.join('\n')
}
console.log(drawEvenNumberTriangle(9))