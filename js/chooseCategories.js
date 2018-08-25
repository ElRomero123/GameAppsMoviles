var geografia;
var gastronomia;
var historia;
var animales;
var deporte;
var cine;
var todas;

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

function showAnimales()
{
    document.location.href = "categories/animales.html";
}

function showDeporte()
{
    document.location.href = "categories/deporte.html";
}

function showCine()
{
    document.location.href = "categories/cine.html";
}

function showTodas()
{
    document.location.href = "categories/todas.html";
}