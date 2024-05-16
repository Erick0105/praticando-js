/*1 - Variável:
servem para armazenar dados necessários temporariamente, e podem variar sempre que um script é executado

1.1 - Declaração:
tem que usar a palavra chave "var" e depois o nome da variável
Ex: var numero;
Pode até atribuir um valor a ela
Ex: numero = 5;

1.2 - Tipo de Dados:
Existe 3:
O tipo númerico, String e Boolean
*/

var price; 
var quantity;
var total;

price = 5; //contém o preço de uma letra
quantity = 14; // armezana a quantidade de letra 
total = price * quantity; // é o custo total

var el = document.getElementById("cost");
el.textContent = "$" + total;
