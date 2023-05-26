var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar (){
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "sith").replace (/e/g, "jedi").replace(/i/g, "padme").replace(/o/g, "force").replace(/u/g, "yoda");

    document.getElementById('output').innerHTML = '<textarea readonly id = "input-texto">' + resultCripto +
    '</textarea>' + '<button class = "bnt-copiar" id = "copiar" onclick = "copiar ()">copiar</button>'
}

function descriptografar (){
    var texto = textInput.value;

    var resultDescript =  texto.replace(/sith/g, "a").replace (/jedi/g, "e").replace(/padme/g, "i").replace(/force/g, "o").replace(/yoda/g, "u");
    
    document.getElementById('output').innerHTML = '<textarea readonly id = "input-texto">' + resultDescript +
    '</textarea>' + '<button class = "bnt-copiar" id = "copiar" onclick = "copiar ()">copiar</button>'
}

function copiar (){
    var textoCopy = document.getElementById ('input-texto');

    textoCopy.select();
    document.execCommand('copy');
    alert ("O Impéro Galático informa: Sua mensagem foi copiada!")
}