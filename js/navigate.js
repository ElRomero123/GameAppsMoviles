var opcionJugador;
var opcionMultijugador;
var opcionAyuda;
var opcionCreditos;

window.onload = inicializar;

function inicializar()
{
    inicializarVariables();
	inicializarEventos();
}

function inicializarVariables()
{
    opcionJugador = document.getElementById("opcionJugador");
    opcionMultijugador = document.getElementById("opcionMultijugador");
    opcionAyuda = document.getElementById("opcionAyuda");
    opcionCreditos = document.getElementById("opcionCreditos");
}

function inicializarEventos()
{
    opcionJugador.addEventListener("click", showJugador);
    opcionMultijugador.addEventListener("click", showMultijugador);
    opcionAyuda.addEventListener("click", showAyuda);
    opcionCreditos.addEventListener("click", showCreditos);
}

function showJugador()
{
    document.location.href = "jugador.html";
}

function showMultijugador()
{
    document.location.href = "multijugador.html";
}

function showAyuda()
{
    document.location.href = "ayuda.html";
}

function showCreditos()
{
    document.location.href = "creditos.html";
}