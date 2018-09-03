var a;
var b;

window.onload = inicializar;

function inicializar()
{
	inicializarVariables();
    inicializarEventos();
}

function inicializarVariables()
{
    a = document.getElementById('a');
    b = document.getElementById('b');
    c = document.getElementById('c');
    d = document.getElementById('d');
    e = document.getElementById('e');
    f = document.getElementById('f');
    g = document.getElementById('g');
    h = document.getElementById('h');
    i = document.getElementById('i');
}

function inicializarEventos()
{
    a.addEventListener("click", imprimir);
    b.addEventListener("click", imprimir);
    c.addEventListener("click", imprimir);
}

function imprimir()
{
    console.log("a");
    console.log(this.id);
}