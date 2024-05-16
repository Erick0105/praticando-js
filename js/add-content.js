/*1 - O que é um Script?
Script é praticamente uma série de intruções que possuem um passo a passo para o computador

Em um script é bom detalhar os objetivos e dividir uma série de tarefas para serem realizadas*/

/*2 - Objetos 
Dentro de programação cada coisa física no mundo pode ser representada como um objeto, 
e para criar um modelo funcional de um objeto cada objeto deve possuir suas:
- Propriedades;
- Eventos;
- Métodos.

Propriedades:
Normalmente são as características de um objeto onde cada propriedade tem um nome e um valor.

Eventos:
São meio que uma maneira do computador alertar e dizer: "Ei, isso acabou de acontecer"
Quando algum evento específico acaba acontecendo, o programador pode usar ele para disparar uma seção específica do código

Métodos:
São perguntas ou instruções resumidamente, onde podem conter diversos instruções*/


/**O Objeto 'document' é muito util até porque ele representa uma página HTML, assim podendo acessar e alterar o contúdo que usuários vêm na página 
 Exemplo:*/
var hoje = new Date();
var horaAtual = hoje.getHours();
var mensagem;

if (horaAtual > 18) {
    mensagem = "Boa Noite!";
} else if(horaAtual > 12) {
    mensagem = "Boa Tarde!";
} else if(horaAtual > 0){
    mensagem = "Bom dia!";
} else{
    mensagem = "Bem vindo";
}

document.write("<h3>" + mensagem + "</h3>")