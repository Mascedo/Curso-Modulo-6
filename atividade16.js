const prompt = require('prompt-sync')();
function drawTriangle(tr) {
   tri = [] 
    for (let i = 1; i <= tr; i++) {//qiantidade de vezes de repetir o processo
        let ast = '*'.repeat(i);//desenhador
        tri.push(ast)
    }
    return tri.join('\n');//adiciona com quebra linha
}

console.log(drawTriangle(3))