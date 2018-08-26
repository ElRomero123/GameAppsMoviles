var home;
var atras;
var entrada;

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
    entrada = document.getElementById("entrada");
}

function inicializarEventos()
{
    home.addEventListener("click", showHome);
    atras.addEventListener("click", showAtras);
    $("#container").on("click", ".alfabeto", writeCharacter);
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
    entrada.value += id;
}