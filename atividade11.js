
function encryptSentenceWithCaesarCipher(str,shift){
    if(typeof str !== 'string' || typeof shift !== 'number' || str === '' || shift === 0){
        return 'valores nao encontrados'
    }
    let resp = ''
    let palavras = str.split(' ')
    palavras.forEach(palavra => {

    palavra.split('').forEach(novaLetra => {
        let id = novaLetra.charCodeAt(0)
        if(id>=65 && id<=90){
            resp += String.fromCharCode(((id - 65 + shift) % 26) + 65)
        }else if (id >= 97 && id <= 122){
            resp += String.fromCharCode(((id - 97 + shift) % 26) + 97)
        }else{
            resp += novaLetra
        }
    });
    resp += ' ';
 });
 return resp;
}
console.log(encryptSentenceWithCaesarCipher("hello world", 3))