const prompt = require('prompt-sync')();
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

let contatos = []
menu()
function menu(){
console.log(`
    --Gerenciador de contatos--
    1. Listar contatos
    2. Adicionar contato
    3. Atualizar contato
    4. Remover contato
    5. Sair
`)
let opcao = Number(prompt('Digite a ação:'))
    switch(opcao){
        case 1:
        listarContatos(contatos)
        menu()
        break;
        case 2:
        let n = prompt('nome: ').trim()
        let t = prompt('telefone: ').trim()
        let g = prompt('gmail: ').trim()
        adicionarContato(contatos,n,t,g)
        menu()
        break;
        case 3:
        let idd = Number(prompt('ID do contato:'))
        let nName = prompt('Novo nome: ')
        let nTele = prompt('Novo telefone: ')
        let nGmail = prompt('Novo gmail: ')
        contatos = atualizarContato(contatos,idd,nName,nTele,nGmail)
        menu()
        break;
        case 4:
        let idr = Number(prompt('ID do contato a remover:'))
        contatos = removerContato(contatos,idr)
        menu()
        break;
        case 5:
        process.exit()
        default:
        console.log('Opção invalida!')
        menu()
    }
}