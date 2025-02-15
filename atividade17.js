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
    if(typeof trr !== 'number'||trr===0){
        return 'Valora não encontrado!'
    }
    par = getEvenNumbers(Math.floor(trr / 2))
    semiDraw = drawTriangle(trr)
    for (let i = 0; i<=par.length; i++){
        semiDraw[i] = semiDraw[i].replaceAll('*', par[i].toString())
    }
    return semiDraw
}
console.log(drawEvenNumberTriangle(9))