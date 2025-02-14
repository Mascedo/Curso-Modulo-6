const teste = 'hello world'//uma constante para fazer os testes

function reverseWordsInSentence(str){
    if(typeof str === 'string'){
        let  dividido = str.split(' ')
        let resp = []
        dividido.forEach(palavra => {
        resp.push(palavra.split('').reverse().join(''))
        });
        let rResp = resp.join(' ')
        return rResp;
    }else{
        return 'não foi enviada uma string'
    }
}
console.log(reverseWordsInSentence(teste))