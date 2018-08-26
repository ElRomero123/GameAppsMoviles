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
    localStorage.setItem("categorie", 1);
    document.location.href = "categories.html";
}

function showGastronomia()
{
    localStorage.setItem("categorie", 2);
    document.location.href = "categories.html";
}

function showHistoria()
{
    localStorage.setItem("categorie", 3);
    document.location.href = "categories.html";
}

function showAnimales()
{
    localStorage.setItem("categorie", 4);
    document.location.href = "categories.html";
}

function showDeporte()
{
    localStorage.setItem("categorie", 5);
    document.location.href = "categories.html";
}

function showCine()
{
    localStorage.setItem("categorie", 6);
    document.location.href = "categories.html";
}

function showTodas()
{
    localStorage.setItem("categorie", 7);
    document.location.href = "categories.html";
}

function showMenu()
{
    localStorage.setItem("categorie", 8);
    document.location.href = "../menu.html";
}