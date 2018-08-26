var home;
var atras;
var a; var b; var c; var d; var e; var f; var g; var h; var i; var j; var k; var l; var m; var n; var ne; var o; var p; var q; var s; var t; var w; var x; var y; var z;
var texto;
var gastronomia = ["aceite", "aguacate", "alcachofa", "almejas", "almendras", "arroz", "avellana", "azucar", "brocoli", "calabaza", "cangrejo", "carne", "cebolla", "cereales", "cerezas", "coco", "espinacas", "frambuesa", "fresa", "fruta", "gamba", "garbanzo", "guisante", "harina", "huevo", "langosta", "langostinos", "leche", "lechuga", "legumbres", "lentejas", "lima", "limon", "mandarina", "mango", "manzana", "marisco", "melocoton", "melon"];
var palabraSeleccionada;

window.onload = inicializar;

function inicializar()
{
    inicializarVariables();
    cargarPalabra();
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
    e = document.getElementById("e");
    f = document.getElementById("f");
    g = document.getElementById("g");
    h = document.getElementById("h");
    i = document.getElementById("i");
    j = document.getElementById("j");
    k = document.getElementById("k");
    l = document.getElementById("l");
    m = document.getElementById("m");
    n = document.getElementById("n");
    ne = document.getElementById("ne");
    o = document.getElementById("o");
    p = document.getElementById("p");
    q = document.getElementById("q");
    r = document.getElementById("r");
    s = document.getElementById("s");
    t = document.getElementById("t");
    u = document.getElementById("u");
    v = document.getElementById("v");
    w = document.getElementById("w");
    x = document.getElementById("x");
    y = document.getElementById("y");
    z = document.getElementById("z");
}

function inicializarEventos()
{
    home.addEventListener("click", showHome);
    atras.addEventListener("click", showAtras);
    a.addEventListener("click", writeCharacter);
    b.addEventListener("click", writeCharacter);
    c.addEventListener("click", writeCharacter);
    d.addEventListener("click", writeCharacter);
    e.addEventListener("click", writeCharacter);
    f.addEventListener("click", writeCharacter);
    g.addEventListener("click", writeCharacter);
    h.addEventListener("click", writeCharacter);
    i.addEventListener("click", writeCharacter);
    j.addEventListener("click", writeCharacter);
    k.addEventListener("click", writeCharacter);
    l.addEventListener("click", writeCharacter);
    m.addEventListener("click", writeCharacter);
    n.addEventListener("click", writeCharacter);
    ne.addEventListener("click", writeCharacter);
    o.addEventListener("click", writeCharacter);
    p.addEventListener("click", writeCharacter);
    q.addEventListener("click", writeCharacter);
    r.addEventListener("click", writeCharacter);
    s.addEventListener("click", writeCharacter);
    t.addEventListener("click", writeCharacter);
    u.addEventListener("click", writeCharacter);
    v.addEventListener("click", writeCharacter);
    w.addEventListener("click", writeCharacter);
    x.addEventListener("click", writeCharacter);
    y.addEventListener("click", writeCharacter);
    z.addEventListener("click", writeCharacter);
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
    var size = palabraSeleccionada.length;
    var variable = palabraSeleccionada.split("");
    var existChar = false;
    var cadena = "";
    var lastCadena = texto.innerText.split("");
    
    // Verificar si existe la letra
    for(var i=0; i < size; i++)
    {
        if(variable[i] == id)
        {
            existChar = true;
        }
    }
    // Verificar si existe la letra

    // Reemplazar y actualizar
    if(existChar)
    {
        for(var i=0; i < size; i++)
        {
            if(variable[i] == id)
            {
                cadena += id;
            }
    
            else
            {
                if(lastCadena[i] != "-")
                {
                    cadena += lastCadena[i];
                }

                else
                {
                    cadena += "-";
                }
            }
        }

        lastCadena = null;
        texto.innerText = cadena;
    }
    // Reemplazar y actualizar

    else
    {
        alert("No existe la letra, menos intentos restantes ...");
    }  
}

function cargarPalabra()
{
    var aleatorio = Math.round(Math.random()*gastronomia.length);
    palabraSeleccionada = gastronomia[aleatorio];
    alert(palabraSeleccionada);
    var size = palabraSeleccionada.length;

    var string = "";

    for(var i=0; i < size; i++)
    {
        string += "-";
    }

    texto.innerText = string;
}