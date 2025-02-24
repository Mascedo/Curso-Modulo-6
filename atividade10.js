const prompt = require('prompt-sync')();
function caesarCipher(str,shift){
    if(typeof str !== 'string' || typeof shift !== 'number' || str === '' || shift === 0){//verifica se os valores enviados podem ser usados
        return 'valores nao encontrados'
    }
    let resposta = ''
    str.split('').forEach(novaLetra => {
        let id = novaLetra.charCodeAt(0)
        if(id>=65 && id<=90){//se for minusculo
            resposta += String.fromCharCode(((id - 65 + shift) % 26) + 65)
        }else if (id >= 97 && id <= 122){//maisculo
            resposta += String.fromCharCode(((id - 97 + shift) % 26) + 97)
        }else{
            resposta += novaLetra//se for numero ou espaço ou simbolo
        }
    });
    return resposta;
}
console.log(caesarCipher('hello',3))