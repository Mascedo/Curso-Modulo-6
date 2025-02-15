function atualizarContato(c,i,n,t,g){
    let idIndex = c.findIndex(contato => contato.id === i)
    if(idIndex !== -1&&c[idIndex].id === i){
        c[idIndex].n = n
        c[idIndex].t = t
        c[idIndex].g = g
        return c;
    }else{
        console.log('ID não encontrado')
    }
}
module.exports = atualizarContato