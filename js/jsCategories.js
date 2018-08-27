var home;
var atras;
var a; var b; var c; var d; var e; var f; var g; var h; var i; var j; var k; var l; var m; var n; var ne; var o; var p; var q; var s; var t; var w; var x; var y; var z;
var texto;
var state;
var gastronomia = ["aceite", "aguacate", "alcachofa", "almejas", "almendras", "arroz", "avellana", "azucar", "brocoli", "calabaza", "cangrejo", "carne", "cebolla", "cereales", "cerezas", "coco", "espinacas", "frambuesa", "fresa", "fruta", "gamba", "garbanzo", "guisante", "harina", "huevo", "langosta", "langostinos", "leche", "lechuga", "legumbres", "lentejas", "lima", "limon", "mandarina", "mango", "manzana", "marisco", "melocoton", "melon"];
var palabraSeleccionada;
var intentos = 8;

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
    state = document.getElementById("state");
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
    var id = this.id; // Obtiene el caracter adecuado
    var size = palabraSeleccionada.length; // Obtiene el tamaño de la palabra propuesta
    var variable = palabraSeleccionada.split("");
    var existChar = false;
    var cadena = ""; // La cadená que se modificará durante todo el proceso
    var lastCadena = texto.innerText.split(""); // Obtiene la cadena anterior
    var contador = 0;
    var contador2 = 0;

    // Verificar si existe la letra y si la palabra NO está finalizada
    for(var i=0; i < size; i++)
    {
        if(variable[i] == id)
        {
            existChar = true; 
        }

        if(lastCadena[i] != "-")
        {
            contador ++;
        }
    }

    // Reemplaza y actualiza la cadena anterior
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
                // No altera los espacios que ya tienen letras
                if(lastCadena[i] != "-")
                {
                    contador2 ++;
                    cadena += lastCadena[i];
                }
                // No altera los espacios que ya tienen letras

                else
                {
                    cadena += "-";
                }
            }

            document.getElementById(id).style.filter = "invert(100%)";   
        }

        lastCadena = null;
        texto.innerText = cadena;
    }
    // Reemplaza y actualiza la cadena anterior

    // Indica que la cadena no existe dentro de la palabra
    else
    {
        if(contador == size)
        {
            state.innerText = "Felicitaciones, no te dejaste ahorcar. Vamos a ver si puedes en la proxima.";
        }

        else
        {
            if(intentos == 1)
            {
                state.innerText = "Estas ahorcado, la palabra era: " + palabraSeleccionada;
            }

            else
            {
                intentos--;
                state.innerText = "No existe la letra, intentos: " + intentos;
            }
        }
    }
}

function cargarPalabra()
{
    var sizeWords = gastronomia.length - 1; // Posición final del arreglo de palabras
    var aleatorio = Math.round(Math.random()*(sizeWords)); // Selecciona una posición desde 0 hasta la posición final
    palabraSeleccionada = gastronomia[aleatorio]; // Obtiene la palabra dada la posición
    alert(palabraSeleccionada); // Muestra la palabra seleccionada
    var size = palabraSeleccionada.length; // Obtiene el tamaño de la palabra seleccionada

    // Crea una cadena de espacios (-) del mismo tamaño de la palabra
    var string = "";

    for(var i=0; i < size; i++)
    {
        string += "-";
    }

    // Pone la cadena en pantalla
    texto.innerText = string;
}