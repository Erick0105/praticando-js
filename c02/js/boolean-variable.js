/*As 4 primeiras linhas são apenas para declaração e armazenamento de Strings nelas*/
var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById("stock");
elStock.className = inStock;
var elShip = document.getElementById("shipping");
elShip.className = shipping; // O método className altera altera a classe da tag escolhida.
/*Nas ultimas 4 linhas se pega 2 elementos pelo seu ID e a Classe desses elementos é atualizado de acordo com as variáveis*/