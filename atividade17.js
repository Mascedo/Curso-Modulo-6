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
    let par = getEvenNumbers(Math.floor(trr / 2))
    let semiDraw = drawTriangle(trr)
    let i = 0
    semiDraw = semiDraw.map((line) => {
        return line.replace(/\*/g, () => par[i++].toString())
    });
    return semiDraw.join('\n')
}
console.log(drawEvenNumberTriangle(9))