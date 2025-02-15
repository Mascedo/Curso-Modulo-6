
function listarContatos(arr){
    if(arr.length===0||arr == undefined){
        console.log ('A lista esta vazia')
        return;
    }
    arr.forEach(rr => {
        console.log('---------------------------------')
        console.log(`ID: ${rr.id}\nNome: ${rr.n}\nTelefone: ${rr.t}\nGmail: ${rr.g}`)
    });
}
module.exports = listarContatos