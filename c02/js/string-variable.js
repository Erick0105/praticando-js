/*As 4 primeiras linhas são apenas para declaração e armazenamento de Strings nelas*/
var username;
var message;
username = "Molly";
message = "See our upcoming range";

var elName = document.getElementById("name");
elName.textContent = username;
elNote = document.getElementById("note");
elNote.textContent = message;
/*Nas ultimas 4 linhas se pega 2 elementos pelo seu ID e o texto desses elementos é atualizado de acordo com as variáveis*/