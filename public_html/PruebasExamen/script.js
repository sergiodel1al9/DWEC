// Asignación de la inicialización de Javascript en la web
window.onload = inicializar;

/**
 * Función para inicializar la página, las variables y eventos necesarios para 
 * su funcionamiento
 * @returns {undefined}
 */
function inicializar() {
    document.getElementById('leerCokie').addEventListener('click', mostrarCookie);
    document.getElementById('enviar').addEventListener('click', validarForm);
    document.getElementById('anyadirProducto').addEventListener('click', anadeElemento);
}
/**
 * funcion para validar el apellidos mediante expresiones regulares
 * @param {String} valor
 * @returns {Boolean} devuleve verdadero si la cadena es correcta o falso si no lo es
 */
function validarApellido(valor) {
    //si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^([a-z ñáéíóú]{2,60})$/i.test(valor))) {
        return false;
    }
    return true;
}

/**
 * funcion para validar el nombre mediante expresiones regulares
 * @param {string} valor el nombre a validar
 * @returns {Boolean} devuleve verdadero si la cadena es correcta o falso si no lo es
 */
function validarNombre(valor) {
    //si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^([a-z ñáéíóú]{2,60})$/i.test(valor))) {
        return false;
    }
    return true;

}

/**
 * Funcion para validar el formulario 
 * @returns {Boolean} devuleve verdadero si el dato introducido es correcto o falso si no lo es
 */
function validarForm() {

    formulario = document.getElementById('formulario');

    var salida = true;

    //si el valor no es correcto muestra un mensaje por pantalla y devuelve falso para que no se ejecute el submit 
    if (!validarNombre(formulario.nombre.value)) {
        alert("Introduzca un nombre válido!!");
        salida = false;
    }
    if (!validarApellido(formulario.ape.value)) {
        alert('Introduzca unos apellidos válidos!!');
        salida = false;
    }
    if (!formulario.fechaNacimineto.value) {
        alert('Introduzca una fecha de nacimiento!!');
        salida = false;
    }

    if (salida == true) {
        guardarCookie();
    }
}

function guardarCookie() {

    formulario = document.getElementById('formulario');

    document.cookie = 'nombre=' + formulario.nombre.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
    document.cookie = 'apellidos=' + formulario.apellidos.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
    document.cookie = 'fechaNacimineto=' + formulario.fechaNacimineto.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
}

function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (var i = 0; i < lista.length; i++) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {
            micookie = lista[i];
        }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual + 1);
    return valor;
}


function mostrarCookie() {
    alert('nombre: ' + leerCookie('nombre'));
    alert('apellidos: ' + leerCookie('apellidos'));
    alert('fechaNacimineto: ' + leerCookie('fechaNacimineto'));
}

function anadeElemento() {
    var fila = document.createElement("tr");
    var columna1 = document.createElement("td");
    var columna2 = document.createElement("td");

    var text1 = document.getElementById('producto').value;
    var text2 = document.getElementById('precio').value;

    var textnode1 = document.createTextNode(text1);
    var textnode2 = document.createTextNode(text2);
    
    document.getElementById('producto').value = '';
     document.getElementById('precio').value = '';

    columna1.appendChild(textnode1);
    columna2.appendChild(textnode2);

    fila.appendChild(columna1);
    fila.appendChild(columna2);

    document.getElementById("tabla").appendChild(fila);
}


