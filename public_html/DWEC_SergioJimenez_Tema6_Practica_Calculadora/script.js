/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Asignación de la inicialización de Javascript en la web
window.onload = inicializar;


/**
 * Función para inicializar la página, las variables y eventos necesarios para 
 * su funcionamiento
 * @returns {undefined}
 */
function inicializar() {
    // Definimos los eventos que van a tener los distintos controles de la página
    document.getElementById('1').addEventListener('click', anyadir1);
    document.getElementById('2').addEventListener('click', anyadir2);
    document.getElementById('3').addEventListener('click', anyadir3);
    document.getElementById('4').addEventListener('click', anyadir4);
    document.getElementById('5').addEventListener('click', anyadir5);
    document.getElementById('6').addEventListener('click', anyadir6);
    document.getElementById('7').addEventListener('click', anyadir7);
    document.getElementById('8').addEventListener('click', anyadir8);
    document.getElementById('9').addEventListener('click', anyadir9);
    document.getElementById('0').addEventListener('click', anyadir0);
    document.getElementById('multiplicacion').addEventListener('click', multiplicacion);
    document.getElementById('division').addEventListener('click', division);
    document.getElementById('igual').addEventListener('click', igual);
    document.getElementById('suma').addEventListener('click', suma);
    document.getElementById('resta').addEventListener('click', resta);
    document.getElementById('c').addEventListener('click', limpia);

    // Creamos las variables para almacenar los operandos y la operación
    operando1 = "";
    operando2 = "";
    operacion = "";

    nuevaOperacion = true;


}

/**
 * Funcion para añadir los valores al operando 1, operando 2 y operacion
 * @param {int} valor
 * @returns {undefined}
 */
function resultado(valor) {
    //Si es una nueva opearacion iniaciamos todas las variables a 0 y cambiamos nuevaOperacion a false
    if (nuevaOperacion) {
        operando1 = "";
        operando2 = "";
        operacion = "";
        nuevaOperacion = false;
    }
    //si valor es un numero y operacion es igual a 0 añadimos a operando 1 el valor
    if (!isNaN(valor)) {
        if (operacion === "") {
            operando1 += valor;
        }
        //si operacion es igual a una operacion añadimos a operando 2 un valor
        else {
            operando2 += valor;
        }
    }
    else {
        // si operando 1 no es igual a 0
        if (operando1 !== "") {
            // y si valor no es igual a =
            if (valor !== "=") {
                //asignamos a operacion el valor
                operacion = valor;
            }
            //calculamos el resultado según el operando
            else {
                calcularResultado();
            }
        }
        //si pulsamos una operacion al principio muestra un mensaje de error
        else
        {
            operando1 = "Debe introducir un numero antes de una operación.";
            operando2 = "";
            operacion = "";
            nuevaOperacion = true;
        }

    }
    //mostramos los datos
    mostrarDatos();
}
/**
 * Funcion para mostrar los datos en el display
 * @returns {undefined}
 */
function mostrarDatos() {
    var display = document.getElementById("display");

    display.innerHTML = operando1 + " " + operacion + " " + operando2;
}


/**
 * Funcion para mostrar el resultado de los dos operandos segun el simbolo que hayamos introducido
 * @returns {undefined}
 */
function calcularResultado() {
    switch (operacion) {
        case "+":
        {
            operando1 = "Resultado: " + (parseInt(operando1) + parseInt(operando2));
            operando2 = "";
            operacion = "";
            break;
        }
        case "-":
        {
            operando1 = "Resultado: " + (parseInt(operando1) - parseInt(operando2));
            operando2 = "";
            operacion = "";
            break;
        }
        case "*":
        {
            operando1 = "Resultado: " + (parseInt(operando1) * parseInt(operando2));
            operando2 = "";
            operacion = "";
            break;
        }
        case "/":
        {
            if (parseInt(operando2) !== 0) {
                operando1 = "Resultado: " + (parseInt(operando1) / parseInt(operando2));
                operando2 = "";
                operacion = "";
            }
            else {
                operando1 = "No se puede dividir entre cero.";
                operando2 = "";
                operacion = "";
            }
            break;
        }
    }

    nuevaOperacion = true;
}

//Funciones para añadir el valor al pulsar el boton a la funcion resultado
function anyadir1() {
    resultado("1");
}

function anyadir2() {
    resultado("2");
}

function anyadir3() {
    resultado("3");
}

function anyadir4() {
    resultado("4");
}

function anyadir5() {
    resultado("5");
}

function anyadir6() {
    resultado("6");
}

function anyadir7() {
    resultado("7");
}

function anyadir8() {
    resultado("8");
}

function anyadir9() {
    resultado("9");
}

function anyadir0() {
    resultado("0");
}

function suma() {
    resultado("+");
}

function resta() {
    resultado("-");
}

function multiplicacion() {
    resultado("*");
}

function division() {
    resultado("/");
}

function igual() {
    resultado("=");
}

/**
 * Funcion para inicializar las variables a 0
 * @returns {undefined} 
 * */
function limpia() {
    operando1 = "";
    operando2 = "";
    operacion = "";
    mostrarDatos();
}

