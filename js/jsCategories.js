var home;
var atras;
var a; var b; var c; var d; var e; var f; var g; var h;
var texto;

window.onload = inicializar;

function inicializar()
{
    inicializarVariables();
	inicializarEventos();
}

function inicializarVariables()
{
    home = document.getElementById("iconoHome");
    atras = document.getElementById("iconoAtras");
    texto = document.getElementById("texto");
    a = document.getElementById("a");
    b = document.getElementById("b");
    c = document.getElementById("c");
    d = document.getElementById("d");
}

function inicializarEventos()
{
    home.addEventListener("click", showHome);
    atras.addEventListener("click", showAtras);
    a.addEventListener("click", writeCharacter);
    b.addEventListener("click", writeCharacter);
    c.addEventListener("click", writeCharacter);
    d.addEventListener("click", writeCharacter);
}

function showHome()
{
    document.location.href = "../menu.html";
}

function showAtras()
{
    document.location.href = "jugador.html";
}

function writeCharacter()
{
    var id = this.id;
    texto.innerText = id;
    /*alert(id); */
}