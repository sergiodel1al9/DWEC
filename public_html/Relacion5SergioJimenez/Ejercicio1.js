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
function inicializar()
{

    // Definimos un nuevo array de ámbito global para albergar las canciones a reproducir
    canciones = new Array();

    // Incluimos las canciones en el array
    canciones.push('audio/bb.mp3');
    canciones.push('audio/juicy.mp3');
    canciones.push('audio/wars.mp3');

    // Definimos una variable global que será la encargada de almacenar la posición 
    // que tiene la canción que está cargada en el reproductor
    posicion = 0;

    // Comprobamos usando botón de reproducir los tipos de sistemas 
    // que se pueden usar para enlazar elementos y los almacenamos en una variables 
    // globales para poder usar en la función crearEvento
    tieneEventlistener = (document.getElementById('play').addEventListener ? true : false);
    tieneAttachEvent = (document.getElementById('play') ? true : false);

    // Finalmente asignamos las funciones a los botones correspondientes
    crearEvento(document.getElementById('play'), 'click', play);
    crearEvento(document.getElementById('stop'), 'click', stop);
    crearEvento(document.getElementById('ffd'), 'click', ffd);
    crearEvento(document.getElementById('rwd'), 'click', rwd);

    crearEvento(document.getElementById('volDown'), 'click', volDown);
    crearEvento(document.getElementById('mute'), 'click', mute);
    crearEvento(document.getElementById('volUp'), 'click', volUp);


}


/**
 * Función que se encarga de reproducir el tema seleccionado
 * @returns {undefined}
 */
function play()
{
    // Recuperamos el reproductor
    var reproductor = document.getElementById('reproductor');

    // Comprobamos si el tema que está seleccionado para reproducirse es el mismo que está actualmente cargado
    if (comprobarReproduccion(reproductor.src, canciones[posicion]))
    {
        // Si no es así, lo cargamos
        reproductor.src = canciones[posicion];
    }

    // Reproducimos el tema cargado
    reproductor.play();

}

/**
 * Función que se encarga de pausar la reproducción del tema
 * @returns {undefined}
 */
function stop()
{
    // Recuperamos el reproductor
    var reproductor = document.getElementById('reproductor');

    // Pausamos la reproducción
    reproductor.pause();

}

/**
 * Función que se encarga de pasar a la siguiente canción y reproducirla
 * @returns {undefined}
 */
function ffd()
{
    // Comprobamos que el cursor no esté en la última posición del array
    if (posicion < canciones.length - 1) {
        // Si no es así, incrementamos en uno el cursor del tema a reproducir
        posicion++;

        // Y llamamos a la función play para que se encargue de cargarlo y 
        // reproducirlo
        play();
    }


}

/**
 * Función que se encarga de pasar a la canción anterior y reproducirla
 * @returns {undefined}
 */
function rwd()
{
    // Comprobamos que el cursor no esté en la primera posición del array
    if (posicion > 0)
    {
        // Si no es así, decrementamos en uno el cursor del tema a reproducir
        posicion--;

        // Y llamamos a la función play para que se encargue de cargarlo y 
        // reproducirlo        
        play();
    }

}

/**
 * Función que nos permite aumentar el volumen de reproducción
 * @returns {undefined}
 */
function volUp()
{
    // Recuperamos el reproductor
    var reproductor = document.getElementById('reproductor');

    // Comprobamos si el reproductor está silenciado
    if(reproductor.muted)
    {
        // Si lo está, habilitamos el sonido
        mute();
    }

    try
    {
        // Aumentamos un poco el volumen
        reproductor.volume += 0.1;
    }
    catch (e)
    {
        // Si se produce algún error al intentar subir el volumen por encima 
        // del rango que le corresponde, capturamos la excepción y ajustamos 
        // el mismo al máximo posible
        reproductor.volume = 1;
    }

}

/**
 * Función que nos permite decrementar el volumen de reproducción
 * @returns {undefined}
 */
function volDown()
{
    
    // Recuperamos el reproductor
    var reproductor = document.getElementById('reproductor');

    // Comprobamos si el reproductor está silenciado
    if(reproductor.muted)
    {
        // Si lo está, habilitamos el sonido
        mute();
    }

    try
    {
        // Reducimos un poco el volumen
        reproductor.volume -= 0.1;
    }
    catch (e)
    {
        // Si se produce algún error al intentar bajar el volumen por debajo
        // del rango que le corresponde, capturamos la excepción y ajustamos 
        // el mismo al minimo posible        
        reproductor.volume = 0;
    }
}

/**
 * Función que nos permite silenciar el volumen de reproducción
 * @returns {undefined}
 */
function mute()
{
    // Recuperamos el reproductor
    var reproductor = document.getElementById('reproductor');

    // Comprobamos si se ha silenciado el sonido
    if (reproductor.muted)
    {
        // Si se ha silenciado, lo habilitamos
        reproductor.muted = false;
    }
    else
    {
        // Si está habilitado, lo silenciamos
        reproductor.muted = true;
    }

}



/**
 * Función que nos permite comprobar si una canción ya se está ejecutando
 * @param {type} temaReproducido El tema que se está reproduciendo actualemnte
 * @param {type} temaReproducir El tema que queremos reproducir
 * @returns {Boolean} True si los temas son distintos, False en caso contrario
 */
function comprobarReproduccion(temaReproducido, temaReproducir)
{
    // Buscamos en la cadena compuesta por el tema que se está reproduciendo, 
    // la cadena que corresponde a el tema a reproducir
    var n = temaReproducido.search(temaReproducir);

    // Si no se encuentra
    if (n === -1)
    {
        // El tema a reproducir no es el mismo y devolvemos true
        return true;
    }
    else
    {
        // En caso contrario, el tema es el mismo y devolvemos false
        return false;
    }


}


/**
 * Función que nos permite crear un evento y asociarlo a una función
 * @param {document.element} elemento Elemento sobre el que se asociará el evento
 * @param {string} tipoEvento Tipo de evento a crear
 * @param {function} funcion Función asociada al evento
 * @returns {undefined}
 */
function  crearEvento(elemento, tipoEvento, funcion)
{
    // Comprobamos si al elemento se le puede añadir un EventListener, lo que 
    // indica que el navegador es compatible con los standards W3C
    if (tieneEventlistener)
    {
        // Asignamos el evento
        elemento.addEventListener(tipoEvento, funcion, false);
    }
    // De no ser así, comprobamos si se le puede adjuntar el un evento, lo que 
    // indica que el navegador es compatible con internet explorer
    else if (tieneAttachEvent)
    {
        // Puesto que al usar attachEvent perdemos la capacidad de acceder al 
        // objeto this dentro de la función que asignamos al evento, usamos el 
        // método call() para pasar el elemento como parámetro y asignarlo al 
        // objeto this de la función
        elemento.attachEvent("on" + tipoEvento, function () {
            funcion.call(elemento);
        });
    }
    // Finalmente si ninguno de los dos métodos anteriores funcionase, usamos 
    // el método tradicional para asignar eventos
    else
    {
        // Asignamos el evento por el método clásico
        elemento["on" + tipoEvento] = funcion;
    }
}


