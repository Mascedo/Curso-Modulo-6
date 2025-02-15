function removerContato(c,i){
    newArr = c.filter(remove => remove.id !== i)
    return newArr;
}
module.exports = removerContato