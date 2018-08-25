var home;
var atras;

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
}

function inicializarEventos()
{
    home.addEventListener("click", showHome);
    atras.addEventListener("click", showAtras);
}

function showHome()
{
    document.location.href = "../menu.html";
}

function showAtras()
{
    document.location.href = "jugador.html";
}