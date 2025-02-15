function adicionarContato(c,n,t,g){
    let id = c.length+1
    c.push({id,n,t,g})
}
module.exports = adicionarContato