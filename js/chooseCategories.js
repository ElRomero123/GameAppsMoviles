var geografia;
var gastronomia;
var historia;

window.onload = inicializar;

function inicializar()
{
    inicializarVariables();
	inicializarEventos();
}

function inicializarVariables()
{
    geografia = document.getElementById("geografia");
    gastronomia = document.getElementById("gastronomia");
    historia = document.getElementById("historia");
}

function inicializarEventos()
{
    geografia.addEventListener("click", showGeografia);
    gastronomia.addEventListener("click", showGastronomia);
    historia.addEventListener("click", showHistoria);
}

function showGeografia()
{
    document.location.href = "categories/gastronomia.html";
}

function showGastronomia()
{
    document.location.href = "categories/geografia.html";
}

function showHistoria()
{
    document.location.href = "categories/historia.html";
}