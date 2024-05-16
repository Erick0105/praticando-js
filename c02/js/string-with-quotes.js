/*As 4 primeiras linhas são apenas para declaração e armazenamento de Strings nelas*/
var title;
var message;
title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>'; // Aqui se tem uma técnica chamada escapas os caracteres de aspa. É feito com a barra invertida antes de qualquer tipo de aspas que quiser. Essa técnica informa o interpretador que o caractere seguinte nesse caso as aspas faz parte da String e não o fim dela.

var elTitle = document.getElementById("title");
elTitle.innerText = title;
var elNote = document.getElementById("note");
elNote.innerHTML = message; //O método innerHTML é adiciona um elemento HTML inteiro

/*Nas ultimas 4 linhas se pega 2 elementos pelo seu ID e o texto desses elementos é atualizado de acordo com as variáveis*/