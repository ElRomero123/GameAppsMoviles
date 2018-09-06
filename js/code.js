var reload;
var texto;
var estado;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;

var geografia = ["albania", "andorra", "argentina", "australia", "austria", "belgica", "bolivia", "brasil", "bulgaria", "canada", "chile", "colombia", "croacia", "dinamarca", "finlandia", "francia", "alemania", "grecia", "vaticano", "honduras", "islandia", "italia", "luxemburgo", "macedonia", "malta", "mexico", "monaco", "nicaragua", "noruega", "peru", "polonia", "portugal", "rumania", "singapur", "suecia", "suiza", "venezuela", "montenegro"];
var gastronomia = ["aceite", "aguacate", "alcachofa", "almejas", "almendras", "arroz", "avellana", "azucar", "brocoli", "calabaza", "cangrejo", "carne", "cebolla", "cereales", "cerezas", "coco", "espinacas", "frambuesa", "fresa", "fruta", "gamba", "garbanzo", "guisante", "harina", "huevo", "langosta", "langostinos", "leche", "lechuga", "legumbres", "lentejas", "lima", "limon", "mandarina", "mango", "manzana", "marisco", "melocoton", "melon"];
var historia = ["etnia", "estratificacion", "despotismo", "emancipacion", "grecolatino", "arcaico", "antropologia", "conquista", "demografia", "encomienda", "estamentos", "geografia", "mestizaje", "numerario", "proteccionismo"];
var palabraSeleccionada;
var intentos = 6;
var cabeza, brazoIzquierdo, brazoDerecho, piernaDerecha, piernaIzquierda, tronco;
var opcionGeografia, opcionGastronomia, opcionHistoria;


window.onload = inicializar;

function inicializar()
{
    inicializarOpcionesEventos();
    inicializarVariables();
    cargarPalabra();
    inicializarEventos();
}

function inicializarOpcionesEventos()
{
    opcionGeografia = document.getElementById("geografia");
    opcionGastronomia = document.getElementById("gastronomia");
    opcionHistoria = document.getElementById("historia");

    opcionGeografia.addEventListener("click", opcion1);
    opcionGastronomia.addEventListener("click", opcion2);
    opcionHistoria.addEventListener("click", opcion3);
}

function inicializarVariables()
{
    reload = document.getElementById('reload');
    texto = document.getElementById("texto");
    estado = document.getElementById("estado");
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
    cabeza = document.getElementById("cabeza");
    tronco = document.getElementById("tronco");
    brazoDerecho = document.getElementById("brazoDerecho");
    brazoIzquierdo = document.getElementById("brazoIzquierdo");
    piernaDerecha = document.getElementById("piernaDerecha");
    piernaIzquierda = document.getElementById("piernaIzquierda"); 
}

function inicializarEventos()
{
    reload.addEventListener("click", actualizar);
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

function writeCharacter()
{
    var id = this.id; // Obtiene el caracter adecuado
    var size = palabraSeleccionada.length; // Obtiene el tamaño de la palabra propuesta
    var variable = palabraSeleccionada.split("");
    var existChar = false;
    var cadena = ""; // La cadená que se modificará durante todo el proceso
    var lastCadena = texto.innerText.split(""); // Obtiene la cadena anterior
    var contador = 0;

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
    if(existChar && intentos > 0)
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
            estado.innerText = "FELICITACIONES, no te dejaste ahorcar. Vamos a ver si puedes en la próxima.";
        }

        else
        {
            if(intentos == 0)
            {
                estado.innerText = "ESTÁS AHORCADO, la palabra era: " + palabraSeleccionada;
            }

            else
            {

                intentos--;
                estado.innerText = "No existe la letra, intentos: " + intentos;

                graficarAhorcado(intentos);
            }
        }
    }
}

function cargarPalabra()
{
    var numero = localStorage.getItem('option');
    var arreglo;
    switch(numero)
    {
        case '1': arreglo = geografia;
        break;
        case '2': arreglo = gastronomia;
        break;
        default: arreglo = historia;
        break;
    }

    cargarCategoria(arreglo);
}

function graficarAhorcado(intentos)
{
    switch(intentos)
    {
        case 5:  cabeza.style.visibility = 'visible';
        break;

        case 4:  tronco.style.visibility = 'visible';
        break;

        case 3:  brazoDerecho.style.visibility = 'visible';
        break;

        case 2:  brazoIzquierdo.style.visibility = 'visible';
        break;

        case 1:  piernaDerecha.style.visibility = 'visible';
        break;

        case 0:  piernaIzquierda.style.visibility = 'visible';
        break;
    }
}

function actualizar()
{
    location.reload();
}

function cargarCategoria(arreglo)
{
    var sizeWords = arreglo.length - 1; // Posición final del arreglo de palabras
    var aleatorio = Math.round(Math.random()*(sizeWords)); // Selecciona una posición desde 0 hasta la posición final
    palabraSeleccionada = arreglo[aleatorio]; // Obtiene la palabra dada la posición
    //alert(palabraSeleccionada); // Muestra la palabra seleccionada
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

function opcion1()
{
    location.reload();
    localStorage.setItem('option', '1');
}

function opcion2()
{
    location.reload();
    localStorage.setItem('option', '2');
}

function opcion3()
{
    location.reload();
    localStorage.setItem('option', '3');
}