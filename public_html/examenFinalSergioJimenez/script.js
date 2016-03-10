/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = inicializar;
function inicializar() {
    document.getElementById('guardar').addEventListener('click', validarForm1);
    document.getElementById('anyadir').addEventListener('click', validarForm2);
    document.getElementById('restablecer').addEventListener('click', mostrarCookie);
    document.getElementById('reiniciar').addEventListener('click', eliminarCookie);
}

/**
 * funcion para validar el apellidos mediante expresiones regulares
 * @param {String} valor
 * @returns {Boolean} devuleve verdadero si la cadena es correcta o falso si no lo es
 */
function validarCodProveedor(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^([a-z 0-9]{1,10})$/i.test(valor))) {
        return false;
    }
    return true;
}

/**
 * funcion para validar el nombre mediante expresiones regulares
 * @param {string} valor el nombre a validar
 * @returns {Boolean} devuleve verdadero si la cadena es correcta o falso si no lo es
 */
function validarCif(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^[ABCDEFGHKLMNPQS]\d\d\d\d\d\d\d[0-9,A-J]$/g.test(valor))) {
        return false;
    }
    return true;
}

function validarTelefono(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^([0-9]{1,9})$/i.test(valor))) {
        return false;
    }
    return true;
}

function validarCodArticulo(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^\d{5}[A-Z]$/.test(valor))) {
        return false;
    }
    return true;
}

function validarDescripcion(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^([a-zA-Z ñáéíóúÑÁÉÍÓÚ]{1,50})$/i.test(valor))) {
        return false;
    }
    return true;
}

function validarPrecio(valor) {
//si el formato es diferente al definido por la expresion regular devuelve falso
    if (!(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/.test(valor))) {
        return false;
    }
    return true;
}


/**
 * Funcion para validar el formulario 
 * @returns {Boolean} devuleve verdadero si el dato introducido es correcto o falso si no lo es
 */
function validarForm1() {

    var formulario = document.getElementById('formulario');
    var salida = true;
    //si el valor no es correcto muestra un mensaje por pantalla y devuelve falso para que no se ejecute el submit 
    if (!validarCodProveedor(formulario.codigoProovedor.value)) {
        alert("Introduzca un código de proveedor válido!!");
        salida = false;
    }
    if (!validarCif(formulario.cif.value)) {
        alert('Introduzca un CIF válido!!');
        salida = false;
    }
    if (!validarTelefono(formulario.telefono.value)) {
        alert('Introduzca un teléfono válido!!');
        salida = false;
    }

    if (salida == true) {
//guardarCookie();
        anadeElemento();
    }
}

/**
 * Funcion para validar el formulario 
 * @returns {Boolean} devuleve verdadero si el dato introducido es correcto o falso si no lo es
 */
function validarForm2() {

    var formulario = document.getElementById('formularioTienda');
    var salida = true;
    //si el valor no es correcto muestra un mensaje por pantalla y devuelve falso para que no se ejecute el submit 
    if (!validarCodArticulo(formulario.codigoArticulo.value)) {
        alert("Introduzca un código de artículo válido!!");
        salida = false;
    }
    if (!validarDescripcion(formulario.descripcion.value)) {
        alert('Introduzca una descripción válida!!');
        salida = false;
    }
    if (!validarPrecio(formulario.precio.value)) {
        alert('Introduzca un precio válido!!');
        salida = false;
    }

    if (salida == true) {
        guardarCookie();
        anadeTabla();
    }
}
/**
 * 
 * @returns {undefined}
 */
function anadeElemento() {
    var select = document.createElement("option");
    var text1 = document.getElementById('codigoProovedor').value;
    var textnode1 = document.createTextNode(text1);
    document.getElementById('codigoProovedor').value = '';
    document.getElementById('cif').value = '';
    document.getElementById('telefono').value = '';
    select.appendChild(textnode1);
    document.getElementById("selectCodigo").appendChild(select);
}

function guardarCookie() {

    formulario = document.getElementById('formularioTienda');
    document.cookie = 'codigoArticulo=' + formulario.codigoArticulo.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
    document.cookie = 'selectCodigo=' + formulario.selectCodigo.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
    document.cookie = 'descripcion=' + formulario.descripcion.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
    document.cookie = 'precio=' + formulario.precio.value + '; ' + 'expires=Thu, 14 Dec 2016 12:00:00 UTC';
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
    alert('Código articulo: ' + leerCookie('codigoArticulo'));
    alert('Código proovedor: ' + leerCookie('selectCodigo'));
    alert('Descripción: ' + leerCookie('descripcion'));
    alert('Precio: ' + leerCookie('precio'));
}

var eliminarCookie = function (key) {
    return document.cookie = key + '=;expires=Thu, 14 Dec 2016 12:00:00 UTC';
}

function anadeTabla() {
    var fila = document.createElement("tr");
    
    var columna1 = document.createElement("td");
    var columna2 = document.createElement("td");
    var columna3 = document.createElement("td");
    var columna4 = document.createElement("td");
    
    var text1 = document.getElementById('codigoArticulo').value;
    var text2 = document.getElementById('selectCodigo').value;
    var text3 = document.getElementById('descripcion').value;
    var text4 = document.getElementById('precio').value;
    
    var textnode1 = document.createTextNode(text1);
    var textnode2 = document.createTextNode(text2);
    var textnode3 = document.createTextNode(text3);
    var textnode4 = document.createTextNode(text4);
    
    document.getElementById('codigoArticulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    
    columna1.appendChild(textnode1);
    columna2.appendChild(textnode2);
    columna3.appendChild(textnode3);
    columna4.appendChild(textnode4);
    
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    
    document.getElementById("tabla").appendChild(fila);
}


