function drawTriangle(tr) {
   tri = [] 
    for (let i = 1; i <= tr; i++) {
        let ast = '*'.repeat(i);
        tri.push(ast)
    }
    return tri.join('\n');
}

console.log(drawTriangle(3))