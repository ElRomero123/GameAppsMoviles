var home;

window.onload = inicializar;

function inicializar()
{
    inicializarVariables();
	inicializarEventos();
}

function inicializarVariables()
{
    home = document.getElementById("iconoHome");
}

function inicializarEventos()
{
    home.addEventListener("click", showMenu);
}

function showMenu()
{
    document.location.href = "../menu.html";
}