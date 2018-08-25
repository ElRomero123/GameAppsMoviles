var geografia;
var gastronomia;
var historia;
var animales;
var deporte;
var cine;
var todas;
var home;

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
    animales = document.getElementById("animales");
    deporte = document.getElementById("deporte");
    cine = document.getElementById("cine");
    todas = document.getElementById("todas");
    home = document.getElementById("iconoHome");
}

function inicializarEventos()
{
    geografia.addEventListener("click", showGeografia);
    gastronomia.addEventListener("click", showGastronomia);
    historia.addEventListener("click", showHistoria);
    animales.addEventListener("click", showAnimales);
    deporte.addEventListener("click", showDeporte);
    cine.addEventListener("click", showCine);
    todas.addEventListener("click", showTodas);
    home.addEventListener("click", showMenu);
}

function showGeografia()
{
    document.location.href = "categories.html";
}

function showGastronomia()
{
    document.location.href = "categories.html";
}

function showHistoria()
{
    document.location.href = "categories.html";
}

function showAnimales()
{
    document.location.href = "categories.html";
}

function showDeporte()
{
    document.location.href = "categories.html";
}

function showCine()
{
    document.location.href = "categories.html";
}

function showTodas()
{
    document.location.href = "categories.html";
}

function showMenu()
{
    document.location.href = "../menu.html";
}