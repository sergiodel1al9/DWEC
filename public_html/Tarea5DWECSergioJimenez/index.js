// Asignación de la inicialización de Javascript en la web
window.onload = inicializar;

/**
 * Clase datos personales del usuario
 * @param {String} nombre Nombre del usuario
 * @param {String} apellidos Apellidos del usuario
 * @param {String} direccion Dirección del usuario
 * @param {String} ciudad Ciudad del usuario
 * @param {String} poblacion Población del usuario
 * @param {Int} cod_postal Código postal del usuario
 * @param {Int} telefono Teléfono del usuario
 * @param {String} email E-Mail del usuario
 * @param {String} fecha_nacimiento Fecha de nacimiento del usuario
 * @param {String} lugar_nacimiento Lugar de nacimiento del usuario
 * @param {String} estado_civil Estado civil del usuario
 * @returns {DatosPersonales} Devuelce un objeto DatosPersonales
 */
function DatosPersonales(nombre, apellidos, direccion, ciudad, poblacion, cod_postal, telefono, email, fecha_nacimiento, lugar_nacimiento, estado_civil)
{
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.poblacion = poblacion;
    this.cod_postal = cod_postal;
    this.telefono = telefono;
    this.email = email;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_nacimiento = lugar_nacimiento;
    this.estado_civil = estado_civil;

}

/**
 * clase InformacionAcademica del usuario
 * @param {String} institucion El nombre de la institución donde se han desarrolado los estudios
 * @param {String} titulo El título conseguido
 * @param {String} fechaInicio La fecha de inicio de los estudios
 * @param {String} fechaFin La fecha de fin de los estudios
 * @param {String} comentarios Comentarios acerca de la formación académica
 * @returns {InformacionAcademica} Devuelve un objeto InformacionAcademica
 */
function InformacionAcademica(institucion, titulo, fechaInicio, fechaFin, comentarios)
{
    this.institucion = institucion;
    this.titulo = titulo;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.comentarios = comentarios;
}

/**
 * Clase ExperienciaProfesional
 * @param {String} empresa El nombre de la empresa donde se acumulado la experiencia laboral
 * @param {String} puesto El puesto desarrolado en la empresa
 * @param {String} fechaInicio La fecha de inicio de la relación laboral
 * @param {String} fechaFin La fecha de fin de la relación laboral
 * @param {String} descripcion La descripción del trabajo realizado
 * @returns {ExperienciaProfesional} Devuelve un objeto ExperienciaProfesional
 */
function ExperienciaProfesional(empresa, puesto, fechaInicio, fechaFin, descripcion)
{
    this.empresa = empresa;
    this.puesto = puesto;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.descripcion = descripcion;
}

/**
 * Clase Curso
 * @param {String} nombre El nombre del curso
 * @param {String} institucion El nombre de la institución
 * @param {String} fechaInicio La fecha de inicio del curso
 * @param {String} fechaFin La fecha de fin del curso
 * @param {String} tituloObtenido El título obtenido con el curso
 * @returns {Curso} Devuelve un objeto Curso
 */
function Curso(nombre, institucion, fechaInicio, fechaFin, tituloObtenido)
{
    this.nombre = nombre;
    this.institucion = institucion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.tituloObtenido = tituloObtenido;
}

/**
 * Clase idioma
 * @param {String} idioma El idioma espeficiado
 * @param {String} nivel El nivel en el idioma especificado
 * @returns {Idioma} Devuleve un objeto idioma
 */
function Idioma(idioma, nivel)
{
    this.idioma = idioma;
    this.nivel = nivel;
}

/**
 * Clase Curriculum
 * @param {DatosPersonales} objDatosPersonales Objeto DatosPersonales que contiene la información personal del usuario
 * @param {Array} arrInformacionAcademica Array de objetos InformacionAcademica que contienen la información académica del usuario
 * @param {Array} arrExperienciaProfesional Array de objetos ExperienciaProfesional que contienen la experiencia profesional del usuario
 * @param {Array} arrCursos Array de objetos Curso que contienen la información de los cursos del usuario
 * @param {Array} arrIdiomas Array de objetos Idioma que contienen la información de los idiomas del usuario
 * @param {String} conocimientos Cadena que contiene conocimientos adicionales del usuario
 * @param {String} hobbies Cadena que contiene los hobbies del usuario
 * @param {File} cartaPresentacion El archivo que contiene la carte de presentación del usuario
 * @returns {Curriculum} Devuelve un objeto Curriculum
 */
function Curriculum(objDatosPersonales, arrInformacionAcademica, arrExperienciaProfesional, arrCursos, arrIdiomas, conocimientos, hobbies, cartaPresentacion)
{
    this.objDatosPersonales = objDatosPersonales;
    this.arrInformacionAcademica = arrInformacionAcademica;
    this.arrExperienciaProfesional = arrExperienciaProfesional;
    this.arrCursos = arrCursos;
    this.arrIdiomas = arrIdiomas;
    this.conocimientos = conocimientos;
    this.hobbies = hobbies;
    this.cartaPresentacion = cartaPresentacion;
}

/**
 * Función para inicializar la página, las variables y eventos necesarios para 
 * su funcionamiento
 * @returns {undefined}
 */
function inicializar()
{

    // Creamos varios arrays para almacenar la información de los cursos, la experiencia profesional, 
    // la información académica y los diomas.

    arrayInfoAcademica = new Array;

    arrayExpProfesional = new Array;

    arrayCursos = new Array;

    arrayIdiomas = new Array;

    // Definimos los eventos que van a tener los distintos controles de la página
    document.getElementById('ciudad').addEventListener('change', cargarSelectPoblaciones, false);
    document.getElementById('poblacion').addEventListener('change', recuperarCodigoPostal, false);
    document.getElementById('addInfoAcademica').addEventListener('click', addInfoAcademica, false);
    document.getElementById('addExpProfesional').addEventListener('click', addExpProfesional, false);
    document.getElementById('addCursos').addEventListener('click', addCursos, false);
    document.getElementById('addIdiomas').addEventListener('click', addIdiomas, false);
    document.getElementById('validarDatos').addEventListener('click', procesorFormulario, false);


    // Creamos el array de poblaciones que contiene las poblaciones para las distintas ciudades
    arrayPoblaciones = [
        [
            ['Aguadulce', '04720'],
            ['Roquetas de Mar', '04740'],
            ['La Gangosa', '04738']
        ],
        [
            ['Albuñol', '18700'],
            ['Sierra Nevada', '18196'],
            ['Guadix', '18500']
        ],
        [
            ['Albaicin', '29310'],
            ['Zorrilla', '29718'],
            ['Estepona', '29680']
        ]
    ];

    // Cargamos dinamicamente los select de poblaciones
    cargarSelectPoblaciones();

    // Recuperamos el código postal
    recuperarCodigoPostal();
}

/**
 * Funcion para añadir informacion académica o modificar una existente
 * @returns {undefined}
 */
function addInfoAcademica()
{
    // Segun el resultado devuelto por la funcion validarInfoAcademica deveulve un mensaje o añade los valores
    switch (validarInfoAcademica()) {
        case 1:
        {
            alert("La institución academica es erronea!!");
            break;
        }
        case 2:
        {
            alert("El titulo academico es erroneo!!");
            break;
        }
        case 3:
        {
            alert("La fecha de inicio es incorrecta!!");
            break;
        }
        case 4:
        {
            alert("La fecha de fin es incorrecta!!");
            break;
        }
        case 5:
        {
            alert("La fecha de inicio es posterior a la fecha fin!!");
            break;
        }
        case 6:
        {
            alert("Los comentarios son erroneos!!");
            break;
        }
        case 0:
        {
            // Comprobamos si el campo con id modoInAc tiene algún valor
            if (document.getElementById('modoInAc').value === '')
            {
                // Si no tiene valor, entonces es una insercción. Llamamos a la función
                // crearInformacionAcademica pasándole los valores necesarios como parámetros
                crearInformacionAcademica(
                        document.getElementById('institucionacademica').value,
                        document.getElementById('tituloacademico').value,
                        document.getElementById('fcomienzoacademico').value,
                        document.getElementById('ffinacademico').value,
                        document.getElementById('comentarios').value);
            }
            else
            {
                // Si hay un valor, lo usaremos como indice del array para acceder al objeto InfoAcademica que tenemos que modificar
                arrayInfoAcademica[document.getElementById('modoInAc').value].institucion = document.getElementById('institucionacademica').value;
                arrayInfoAcademica[document.getElementById('modoInAc').value].titulo = document.getElementById('tituloacademico').value;
                arrayInfoAcademica[document.getElementById('modoInAc').value].fechaInicio = document.getElementById('fcomienzoacademico').value;
                arrayInfoAcademica[document.getElementById('modoInAc').value].fechaFin = document.getElementById('ffinacademico').value;
                arrayInfoAcademica[document.getElementById('modoInAc').value].comentarios = document.getElementById('comentarios').value;


                // Una vez modificada la información académica limpiamos el campo oculto
                document.getElementById('modoInAc').value = '';

                // Ponemos los campos en blanco una vez realizada la modificación
                document.getElementById('institucionacademica').value = '';
                document.getElementById('tituloacademico').value = '';
                document.getElementById('fcomienzoacademico').value = '';
                document.getElementById('ffinacademico').value = '';
                document.getElementById('comentarios').value = '';
            }

            // Creamos la tabla de información académica, pasándole el id del div que contendrá la tabla
            crearTablaInfoAcademica(arrayInfoAcademica, 'contenedor_tabla_infoAcademica');
        }
    }
}

/**
 * Funcion para añadir experiencia profesional o modificar una existente
 * @returns {undefined} 
 */
function addExpProfesional()
{

    // Segun el resultado devuelto por la funcion validarExpProfesional deveulve un mensaje o añade los valores
    switch (validarExpProfesional()) {
        case 1:
        {
            alert("La empresa es erronea!!");
            break;
        }
        case 2:
        {
            alert("El puesto es erroneo!!");
            break;
        }
        case 3:
        {
            alert("La fecha de inicio es incorrecta!!");
            break;
        }
        case 4:
        {
            alert("La fecha de fin es incorrecta!!");
            break;
        }
        case 5:
        {
            alert("La fecha de inicio es posterior a la fecha fin!!");
            break;
        }
        case 6:
        {
            alert("La descripcion es erronea!!");
            break;
        }
        case 0:
        {
            // Comprobamos si el campo oculto con id modoExp tiene algún valor almacenado
            if (document.getElementById('modoExp').value === '')
            {
                // Si no es así, llamamos a la función crearExpProfesional pasándole los 
                // valores adecuados como parámetros para que cree un nuevo objeto 
                // ExperienciaProfesional y lo añada al array correspondiente
                crearExpProfesional(
                        document.getElementById('empresa').value,
                        document.getElementById('puesto').value,
                        document.getElementById('fcomienzoprofesional').value,
                        document.getElementById('ffinprofesional').value,
                        document.getElementById('descripcionPuesto').value);
            }
            else
            {
                // Si hay un valor, lo usaremos como indice del array para acceder al objeto ExperienciaProfesional que tenemos que modificar
                arrayExpProfesional[document.getElementById('modoExp').value].empresa = document.getElementById('empresa').value;
                arrayExpProfesional[document.getElementById('modoExp').value].puesto = document.getElementById('puesto').value;
                arrayExpProfesional[document.getElementById('modoExp').value].fechaInicio = document.getElementById('fcomienzoprofesional').value;
                arrayExpProfesional[document.getElementById('modoExp').value].fechaFin = document.getElementById('ffinprofesional').value;
                arrayExpProfesional[document.getElementById('modoExp').value].descripcion = document.getElementById('descripcionPuesto').value;


                // Una vez modificado la experiencia profesional, limpiamos el campo oculto
                document.getElementById('modoExp').value = '';

                // Ponemos los campos en blaco despues de modificar
                document.getElementById('empresa').value = '';
                document.getElementById('puesto').value = '';
                document.getElementById('fcomienzoprofesional').value = '';
                document.getElementById('ffinprofesional').value = '';
                document.getElementById('descripcionPuesto').value = '';
            }

            // Creamos la tabla de experiencias profesionales
            crearTablaExperienciaProf(arrayExpProfesional, 'contenedor_tabla_experienciaProf');
        }
    }

}

/**
 * Funcion para añadir cursos o modificar uno existente
 * @returns {undefined} 
 */
function addCursos()
{
    // Segun el resultado devuelto por la funcion validarCursos devuelve un mensaje o añade los valores
    switch (validarCursos()) {
        case 1:
        {
            alert("El nombre del curso es erroneo!!");
            break;
        }
        case 2:
        {
            alert("La institución del curso es erronea!!");
            break;
        }
        case 3:
        {
            alert("La fecha de inicio es incorrecta!!");
            break;
        }
        case 4:
        {
            alert("La fecha de fin es incorrecta!!");
            break;
        }
        case 5:
        {
            alert("La fecha de inicio es posterior a la fecha fin!!");
            break;
        }
        case 6:
        {
            alert("El titulo del curso es erroneo!!");
            break;
        }
        case 0:
        {
            // Comprobamos si el campo oculto modoCurso contiene algún valor
            if (document.getElementById('modoCurso').value === '')
            {
                // Si no es así, se trata de una insercción y llamamos a la función 
                // crearCursos pasándole los valores correspondientes como parámetros
                crearCursos(
                        document.getElementById('nombrecurso').value,
                        document.getElementById('institucioncurso').value,
                        document.getElementById('fcomienzo').value,
                        document.getElementById('ffin').value,
                        document.getElementById('titulo').value);
            }
            else
            {
                // Si hay un valor, lo usaremos como indice del array para acceder al objeto Curso que tenemos que modificar
                arrayCursos[document.getElementById('modoCurso').value].nombre = document.getElementById('nombrecurso').value;
                arrayCursos[document.getElementById('modoCurso').value].institucion = document.getElementById('institucioncurso').value;
                arrayCursos[document.getElementById('modoCurso').value].fechaInicio = document.getElementById('fcomienzo').value;
                arrayCursos[document.getElementById('modoCurso').value].fechaFin = document.getElementById('ffin').value;
                arrayCursos[document.getElementById('modoCurso').value].tituloObtenido = document.getElementById('titulo').value;


                // Una vez modificado el curso, limpiamos el campo oculto
                document.getElementById('modoCurso').value = '';

                // Ponemos los campos en blaco despues de modificar
                document.getElementById('nombrecurso').value = '';
                document.getElementById('institucioncurso').value = '';
                document.getElementById('fcomienzo').value = '';
                document.getElementById('ffin').value = '';
                document.getElementById('titulo').value = '';
            }

            // Creamos la tabla de cursos
            crearTablaCursos(arrayCursos, 'contenedor_tabla_cursos');
        }
    }
}

/**
 * Funcion para añadir idiomas o modificar uno existente
 * @returns {undefined}  
 */
function addIdiomas()
{
    // Segun el resultado devuelto por la funcion validarIdiomas deveulve un mensaje o añade los valores
    switch (validarIdiomas()) {
        case 1:
        {
            alert("El idioma es erroneo!!");
            break;
        }
        case 2:
        {
            alert("El nivel es erroeno!!");
            break;
        }
        case 0:
        {
            // Comprobamos si hay algún valor en el campo oculto modoIdioma, 
            // si no lo hay es una insercción, si lo hay es una modificación
            if (document.getElementById('modoIdioma').value === '')
            {
                // Si no hay valor en el campo oculto, creamos un nuevo idioma
                crearIdiomas(
                        document.getElementById('idioma').value,
                        document.getElementById('nivel').value);
            }
            else
            {
                // Si hay un valor, lo usaremos como indice del array para acceder al objeto Idioma que tenemos que modificar
                arrayIdiomas[document.getElementById('modoIdioma').value].idioma = document.getElementById('idioma').value;
                arrayIdiomas[document.getElementById('modoIdioma').value].nivel = document.getElementById('nivel').value;

                // Una vez modificado el idioma, limpiamos el campo oculto
                document.getElementById('modoIdioma').value = '';

                // Ponemos los campos en blaco tras modificar
                document.getElementById('idioma').value = '';
                document.getElementById('nivel').value = '';
            }

            // Creamos la tabla de idiomas
            crearTablaIdiomas(arrayIdiomas, 'contenedor_tabla_idiomas');
        }
    }
}

/**
 * Función que nos permite procesar los datos introducidos
 * @returns {undefined} 
 */
function procesorFormulario()
{
    // Segun el resultado devuelto por la funcion validarDatos deveulve un mensaje o añade los valores
    switch (validarDatos()) {
        case 1:
        {
            alert("El nombre es erroneo!!");
            break;
        }
        case 2:
        {
            alert('Los apellidos son incorrectos!!');
            break;
        }
        case 3:
        {
            alert('La direccion es incorrecta!!');
            break;
        }
        case 4:
        {
            alert('El telefono es incorrecto!!');
            break;
        }
        case 5:
        {
            alert('La fecha de nacimiento es incorrecta!!');
            break;
        }

        case 6:
        {
            alert('El email es incorrecto!!');
            break;
        }

        case 7:
        {
            alert('Debe de incluir una carta de presentacion!!');
            break;
        }
        case 0:
        {
            // Si todas las validaciones son correctas, usamos los datos de la 
            // página para crear un objeto DatosPersonales
            var personales = new DatosPersonales(
                    document.getElementById('nombre').value,
                    document.getElementById('apellidos').value,
                    document.getElementById('direccion').value,
                    document.getElementById('ciudad').value,
                    document.getElementById('poblacion').value,
                    document.getElementById('codpostal').value,
                    document.getElementById('telefono').value,
                    document.getElementById('email').value,
                    document.getElementById('fnacimiento').value,
                    document.getElementById('lugarnac').value,
                    document.getElementById('estadocivil').value
                    );

            // A continuación creamos un objeto Currículum usando el objeto 
            // DatosPersonales creado, así como los distintos arrays y los 
            // valores de conocimientos adicionales, hobbies y carta de presentación
            var curri = new Curriculum(
                    personales,
                    arrayInfoAcademica,
                    arrayExpProfesional,
                    arrayCursos,
                    arrayIdiomas,
                    document.getElementById('conocimientos_adicionales').value,
                    document.getElementById('hobbies').value,
                    document.getElementById('carta').files[0]
                    );

            // Finalmente con el objeto Curriculum creado correctamente llamamos 
            // la función mostrarCurriculum para que se encargue de mostrar 
            // los resultados
            mostrarCurriculum(curri);

            break;
        }
    }
}

/**
 * Funcion para crear la informacion academica
 * @param {String} institucion El nombre de la institución
 * @param {String} titulo El título de la institución
 * @param {String} fechaInicio La fecha de inicio de la formación académica
 * @param {String} fechaFin La fecha de fin de la formación académica
 * @param {String} comentarios Los comentarios acerca de la formación académica
 * @returns {undefined} */
function crearInformacionAcademica(institucion, titulo, fechaInicio, fechaFin, comentarios)
{


    // Creamos un objeto InformacionAcademica con los valores pasados a la función
    var infoAcademica = new InformacionAcademica(institucion, titulo, fechaInicio, fechaFin, comentarios);

    // Ponemos los campos en blaco al añadir un elemento
    document.getElementById('institucionacademica').value = '';
    document.getElementById('tituloacademico').value = '';
    document.getElementById('fcomienzoacademico').value = '';
    document.getElementById('ffinacademico').value = '';
    document.getElementById('comentarios').value = '';

    // Introducidmos el objeto creado en el array correspondiente
    arrayInfoAcademica.push(infoAcademica);

}

/**
 * Función que nos permite crear un objeto ExperienciaProfesional y añadirlo a su array correspondiente
 * @param {String} empresa El nombre de la empresa
 * @param {String} puesto El puesto desarrollado en la empresa
 * @param {String} fechaInicio La fecha de inicio de la relación laboral
 * @param {String} fechaFin La fecha de fin de la relación laboral
 * @param {String} descripcion La descripción de las funciones durante la relación laboral
 * @returns {undefined} 
 */
function crearExpProfesional(empresa, puesto, fechaInicio, fechaFin, descripcion)
{
    // Creamos un objeto ExperienciaProfesional con los parámetros pasados a la función
    var expProfesional = new ExperienciaProfesional(empresa, puesto, fechaInicio, fechaFin, descripcion);

    // Ponemos los campos en blaco al añadir un elemento
    document.getElementById('empresa').value = '';
    document.getElementById('puesto').value = '';
    document.getElementById('fcomienzoprofesional').value = '';
    document.getElementById('ffinprofesional').value = '';
    document.getElementById('descripcionPuesto').value = '';

    // Introducimos el objeto recién creado en el array correspondiente
    arrayExpProfesional.push(expProfesional);

}

/**
 * Funcion para crear cursos
 * @param {String} nombre El nombre del curso
 * @param {String} institucion La institución donde se ha realizado el curso
 * @param {String} fechaInicio Fecha de inicio del curso
 * @param {String} fechaFin Fecha de fin del curso
 * @param {String} tituloObtenido Título obtenido con el curso
 * @returns {undefined} */
function crearCursos(nombre, institucion, fechaInicio, fechaFin, tituloObtenido)
{


    // Creamos un objeto Curso con los valores de los parámetros de la función
    var curso = new Curso(nombre, institucion, fechaInicio, fechaFin, tituloObtenido);

    // Ponemos los campos en blaco al añadir un elemento
    document.getElementById('nombrecurso').value = '';
    document.getElementById('institucioncurso').value = '';
    document.getElementById('fcomienzo').value = '';
    document.getElementById('ffin').value = '';
    document.getElementById('titulo').value = '';

    // Introducimos el objeto recién creado en el array correspondiente
    arrayCursos.push(curso);
}

/**
 * Función que nos permite crear un objeto Idioma y añadirlo a su array correspondiente
 * @param {String} idioma El nombre del idioma
 * @param {String} nivel El nivel alcanzado en el idioma
 * @returns {undefined} 
 */
function crearIdiomas(idioma, nivel)
{

    // Creamos un objeto Idioma con los valores pasados como parámetro a la función
    var idi = new Idioma(idioma, nivel);

    // Ponemos los campos en blaco al añadir un elemento
    document.getElementById('idioma').value = '';
    document.getElementById('nivel').value = '';

    // Agregamos el objeto recién creado al array de idiomas
    arrayIdiomas.push(idi);
}
/**
 * Funcion para validar los datos personales, otros conocimientos, hobbies y carta de presentación
 * @returns {Number} Devuelve un numero según lo que falla 
 */
function validarDatos()
{
    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!/^([a-zA-Z ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('nombre').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('nombre').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('nombre').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!/^([a-zA-Z ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('apellidos').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('apellidos').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('apellidos').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 3
    if (!/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,./º]{1,50})$/i.test(document.getElementById('direccion').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('direccion').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('direccion').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 4
    if (!/^([0-9]{9})$/i.test(document.getElementById('telefono').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('telefono').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;

    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('telefono').className = '';
    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!document.getElementById('fnacimiento').value === '' || !validarRangoFechas(document.getElementById('fnacimiento').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fnacimiento').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fnacimiento').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 6
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('email').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('email').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;

    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('telefono').className = '';
    }

    // Si no se ha seleccionado ningúna carta de presentación devolvemos 7
    if (document.getElementById('carta').value === '')
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('carta').className = 'error';

        // Además, devolvemos 7 como código de error
        return 7;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('carta').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos de informacion academica
 * @returns {Number} devuelve un numero según lo que falla
 */
function validarInfoAcademica()
{


    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('institucionacademica').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('institucionacademica').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {

        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('institucionacademica').className = '';
    }


    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('tituloacademico').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('tituloacademico').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('tituloacademico').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzoacademico').value === '' || !validarRangoFechas(document.getElementById('fcomienzoacademico').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoacademico').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoacademico').className = '';

    }

    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffinacademico').value === '' || !validarRangoFechas(document.getElementById('ffinacademico').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffinacademico').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffinacademico').className = '';

    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzoacademico').value, document.getElementById('ffinacademico').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoacademico').className = 'error';
        document.getElementById('ffinacademico').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoacademico').className = '';
        document.getElementById('ffinacademico').className = '';
    }

    //si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('comentarios').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('comentarios').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('comentarios').className = '';

    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos de experiencia profesional
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarExpProfesional()
{

    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('empresa').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('empresa').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('empresa').className = '';
    }
    //si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('puesto').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('puesto').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('puesto').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzoprofesional').value === '' || !validarRangoFechas(document.getElementById('fcomienzoprofesional').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoprofesional').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoprofesional').className = '';
    }
    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffinprofesional').value === '' || !validarRangoFechas(document.getElementById('ffinprofesional').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffinprofesional').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffinprofesional').className = '';
    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzoprofesional').value, document.getElementById('ffinprofesional').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoprofesional').className = 'error';
        document.getElementById('ffinprofesional').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoprofesional').className = '';
        document.getElementById('ffinprofesional').className = '';
    }

    //si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('descripcionPuesto').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('descripcionPuesto').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('descripcionPuesto').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos del curso
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarCursos()
{
    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('nombrecurso').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('nombrecurso').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('nombrecurso').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('institucioncurso').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('institucioncurso').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('institucioncurso').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzo').value === '' || !validarRangoFechas(document.getElementById('fcomienzo').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzo').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzo').className = '';
    }

    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffin').value === '' || !validarRangoFechas(document.getElementById('ffin').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffin').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffin').className = '';
    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzo').value, document.getElementById('ffin').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzo').className = 'error';
        document.getElementById('ffin').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzo').className = '';
        document.getElementById('ffin').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('titulo').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('titulo').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('titulo').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos de idiomas
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarIdiomas()
{
    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('idioma').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('idioma').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('idioma').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('nivel').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('nivel').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('nivel').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Función que nos permite validar un rango de fechas
 * @param {String} fechaInicial Fecha inicial del rango de fechas a validar
 * @param {String} fechaFinal Fecha final del rango de fechas a validar
 * @returns {Boolean} True si el rango es correcto, false en caso contrario
 */
function validarRangoFechas(fechaInicial, fechaFinal)
{
    // Creamos dos variables para almacenar un objeto date para las fechas de los parámetros
    var fecha1 = new Date(fechaInicial);
    var fecha2 = new Date(fechaFinal);

    // Restamos las dos fechas entre sí
    var timeDiff = fecha2.getTime() - fecha1.getTime();

    // Si el resultado es negativo, la fecha inicial es mayor que la fecha final
    if (timeDiff < 0) {
        // Si este es el caso, el rango de fechas será erroneo y devolvemos false
        return false;
    }
    else
    {
        // Si el rango de fechas es correcto, devolvemos true
        return true;
    }
}

/**
 * Funcion para validar los campos de informacion academica
 * @returns {Number} devuelve un numero según lo que falla
 */
function validarInfoAcademica()
{


    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('institucionacademica').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('institucionacademica').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {

        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('institucionacademica').className = '';
    }


    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('tituloacademico').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('tituloacademico').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('tituloacademico').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzoacademico').value === '' || !validarRangoFechas(document.getElementById('fcomienzoacademico').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoacademico').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoacademico').className = '';

    }

    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffinacademico').value === '' || !validarRangoFechas(document.getElementById('ffinacademico').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffinacademico').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffinacademico').className = '';

    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzoacademico').value, document.getElementById('ffinacademico').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoacademico').className = 'error';
        document.getElementById('ffinacademico').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoacademico').className = '';
        document.getElementById('ffinacademico').className = '';
    }

    //si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('comentarios').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('comentarios').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('comentarios').className = '';

    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos de experiencia profesional
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarExpProfesional()
{

    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('empresa').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('empresa').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('empresa').className = '';
    }
    //si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('puesto').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('puesto').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('puesto').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzoprofesional').value === '' || !validarRangoFechas(document.getElementById('fcomienzoprofesional').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoprofesional').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoprofesional').className = '';
    }
    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffinprofesional').value === '' || !validarRangoFechas(document.getElementById('ffinprofesional').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffinprofesional').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffinprofesional').className = '';
    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzoprofesional').value, document.getElementById('ffinprofesional').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzoprofesional').className = 'error';
        document.getElementById('ffinprofesional').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzoprofesional').className = '';
        document.getElementById('ffinprofesional').className = '';
    }

    //si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('descripcionPuesto').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('descripcionPuesto').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('descripcionPuesto').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos del curso
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarCursos()
{
    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('nombrecurso').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('nombrecurso').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('nombrecurso').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('institucioncurso').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('institucioncurso').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('institucioncurso').className = '';
    }

    // Si la fecha de inicio no ha sido introducida o es posterior a la fecha actual devolvemos 3
    if (document.getElementById('fcomienzo').value === '' || !validarRangoFechas(document.getElementById('fcomienzo').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzo').className = 'error';

        // Además, devolvemos 3 como código de error
        return 3;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzo').className = '';
    }

    // Si la fecha de fin no ha sido introducida o es posterior a la fecha actual devolvemos 4
    if (document.getElementById('ffin').value === '' || !validarRangoFechas(document.getElementById('ffin').value, new Date()))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('ffin').className = 'error';

        // Además, devolvemos 4 como código de error
        return 4;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('ffin').className = '';
    }

    // Validamos si el rango de fechas introducidas es correcto, esto es, que la fecha de inicio no sea posterior a la fecha de fin 
    if (!validarRangoFechas(document.getElementById('fcomienzo').value, document.getElementById('ffin').value))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('fcomienzo').className = 'error';
        document.getElementById('ffin').className = 'error';

        // Además, devolvemos 5 como código de error
        return 5;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('fcomienzo').className = '';
        document.getElementById('ffin').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 6
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,150})$/i.test(document.getElementById('titulo').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('titulo').className = 'error';

        // Además, devolvemos 6 como código de error
        return 6;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('titulo').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Funcion para validar los campos de idiomas
 * @returns {Number} Devuelve un numero según lo que falla
 */
function validarIdiomas()
{
    // Si el formato es diferente al definido por la expresion regular devuelve 1
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('idioma').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('idioma').className = 'error';

        // Además, devolvemos 1 como código de error
        return 1;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('idioma').className = '';
    }

    // Si el formato es diferente al definido por la expresion regular devuelve 2
    if (!(/^([a-zA-Z0-9 ÑÁÉÍÓÚñáéíóú,.]{1,50})$/i.test(document.getElementById('nivel').value)))
    {
        // Cambiamos la clase del objeto para que se muestre el error si la validación falla
        document.getElementById('nivel').className = 'error';

        // Además, devolvemos 2 como código de error
        return 2;
    }
    else
    {
        // Si la validación está correcta, eliminamos las clases que pudiese tener el elemento
        document.getElementById('nivel').className = '';
    }

    // Si todo los campos introducidos son correctos devuelve 0
    return 0;
}

/**
 * Función que nos permite validar un rango de fechas
 * @param {String} fechaInicial Fecha inicial del rango de fechas a validar
 * @param {String} fechaFinal Fecha final del rango de fechas a validar
 * @returns {Boolean} True si el rango es correcto, false en caso contrario
 */
function validarRangoFechas(fechaInicial, fechaFinal)
{
    // Creamos dos variables para almacenar un objeto date para las fechas de los parámetros
    var fecha1 = new Date(fechaInicial);
    var fecha2 = new Date(fechaFinal);

    // Restamos las dos fechas entre sí
    var timeDiff = fecha2.getTime() - fecha1.getTime();

    // Si el resultado es negativo, la fecha inicial es mayor que la fecha final
    if (timeDiff < 0) {
        // Si este es el caso, el rango de fechas será erroneo y devolvemos false
        return false;
    }
    else
    {
        // Si el rango de fechas es correcto, devolvemos true
        return true;
    }
}

/**
 * Función que nos permite crear una tabla con la información académica del array
 * @param {array} arrayInfoAcademica El array que contiene la información académica
 * @param {string} anclaje El id del elemento donde se añadirá la tabla
 * @returns {crearTablaInfoAcademica.tabla|Element} Si no se añade un id de anclaje la función devolverá un elemento DOM table
 */
function crearTablaInfoAcademica(arrayInfoAcademica, anclaje)
{
    // Comprobamos si tenemos valor para anclaje
    if (anclaje !== '')
    {
        // Si es así, localizamos el contenedor de la tabla
        var contenedor = document.getElementById(anclaje);

        // Comprobamos si tiene algún hijo
        if (contenedor.childElementCount > 0)
        {
            // De ser así, lo eliminamos
            contenedor.removeChild(contenedor.childNodes[0]);
        }
    }

    // Comprobamos si el array tiene información para mostrar
    if (arrayInfoAcademica.length > 0)
    {
        // Si es el caso creamos un nuevo objeto table
        var tabla = document.createElement('table');

        // Le asignamos un id
        tabla.id = 'tabla_infoAcademica';

        // Creamos una fila para la descripción de las columnas
        var tr = document.createElement('tr');

        // Creamos cinco columnas de cabecera
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');
        var th5 = document.createElement('th');

        // Si tenemos anclaje, debemos añadir dos columnas más para los botones 
        // de modificar y borrar
        if (anclaje !== '')
        {
            var th6 = document.createElement('th');
            var th7 = document.createElement('th');
        }


        // Creamos los textos para las cabeceras
        var header1 = document.createTextNode('Institucion');
        var header2 = document.createTextNode('Titulo');
        var header3 = document.createTextNode('Inicio');
        var header4 = document.createTextNode('Fín');
        var header5 = document.createTextNode('Comentarios');

        // Si tenemos anclaje, añadimos los textos correspondientes a las cabeceras
        if (anclaje !== '')
        {
            var header6 = document.createTextNode('Editar');
            var header7 = document.createTextNode('Eliminar');

        }


        // Anexamos el texto a las cabeceras
        th1.appendChild(header1);
        th2.appendChild(header2);
        th3.appendChild(header3);
        th4.appendChild(header4);
        th5.appendChild(header5);

        // Si tenemos anclaje, anexamos las cabeceras
        if (anclaje !== '') {

            // Anexamos las textos
            th6.appendChild(header6);
            th7.appendChild(header7);

            // Cambiamos la clase de las cabeceras por una específica para ellas
            th6.className = 'reducido';
            th7.className = 'reducido';
        }


        // Y las cabeceras a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);

        // Si tenemos anclaje, añadimos las cabeceras de editar y eliminar
        if (anclaje !== '')
        {
            tr.appendChild(th6);
            tr.appendChild(th7);
        }


        // Finalmente agregamos la fila con la descripciónd e las columnas a la tabla
        tabla.appendChild(tr);

        // Iteramos tantas veces como elementos tenga el array de InfoAcademica
        for (var i = 0; i < arrayInfoAcademica.length; i++) {

            // Recuperamos el objeto correspondiente a la iteración
            var info = arrayInfoAcademica[i];

            // Creamos una fila nueva
            tr = document.createElement('tr');

            // Y cinco columnas
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');

            // Si tenemos anclaje, creamos también dos celdas más para los 
            // botones de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos las celdas
                var td6 = document.createElement('td');
                var td7 = document.createElement('td');

                // Les cambiamos la clase por una específica para estas columnas
                td6.className = 'reducido';
                td7.className = 'reducido';
            }


            // Recuperamos el valor del nombre y del ideario y creamos dos objetos TextNode
            var text1 = document.createTextNode(info.institucion);
            var text2 = document.createTextNode(info.titulo);
            var text3 = document.createTextNode(formatearFecha(info.fechaInicio, true));
            var text4 = document.createTextNode(formatearFecha(info.fechaFin, true));
            var text5 = document.createTextNode(info.comentarios);

            // Si tenemos anclaje, creamos los botónes de editar y eliminar
            if (anclaje !== '') {
                // Creamos una imagén para que sea nuestro botón de edición
                var botonEdit = document.createElement('img');

                // Asignamos una imagen
                botonEdit.src = 'imagenes/edit.png';

                // Le asignamos un tooltip
                botonEdit.title = "Pulse para editar los valores de la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // que se llame a la función necesaria para cargar los datos para edición
                botonEdit.onclick = (function () {
                    var indice = i;
                    return function () {
                        // Llamamos a la función que se encarga de gargar los datos para su modificación
                        cargarDatosModificarInformacionAcademica(indice);
                    };
                })();

                // Creamos una imagén para que sea nuestro botón de borrado
                var botonDelete = document.createElement('img');

                // Asignamos una imagen
                botonDelete.src = 'imagenes/delete.png';

                // Le asignamos un tooltip
                botonDelete.title = "Pulse para eliminar la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // eliminar el objeto correspondiente a la fila del array de idiomas y 
                // volver a crear la tabla
                botonDelete.onclick = (function () {
                    var indice = i;
                    return function () {

                        // Eliminamos el objeto correspondiene del array de información académica
                        arrayInfoAcademica.splice(indice, 1);

                        // Volvemos a crear la tabla de información académica
                        crearTablaInfoAcademica(arrayInfoAcademica, 'contenedor_tabla_infoAcademica');
                    };
                })();
            }

            // Añadimos los textos a las celdas
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);

            // Si tenemos anclaje, añadimos los botones a las celdas
            if (anclaje !== '')
            {
                td6.appendChild(botonEdit);
                td7.appendChild(botonDelete);
            }


            // Las columnas a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            // Añadimos las celdas de eliminar y borrar su tenemos anclaje
            if (anclaje !== '')
            {
                tr.appendChild(td6);
                tr.appendChild(td7);
            }

            // Y la fila a la tabla
            tabla.appendChild(tr);
        }

        // Comprobamos si tenemos anclaje
        if (anclaje !== '')
        {

            // Si es asi, agregamos la tabla creada dinamicamente al contenedor
            document.getElementById(anclaje).appendChild(tabla);
        }
        else
        {
            // En caso contrario, devolvemos la tabla creada
            return tabla;
        }
    }
}

/**
 * Función que nos permite crear una tabla con la información académica del array
 * @param {array} arrayExpProfesional El array que contiene los objetos con la experiencia profesional
 * @param {String} anclaje El id del elemento donde se añadirá la tabla
 * @returns {crearTablaExperienciaProf.tabla|Element} Si no se añade un id de anclaje la función devolverá un elemento DOM table
 */
function crearTablaExperienciaProf(arrayExpProfesional, anclaje)
{
    // Comprobamos si se ha pasado un valor para anclaje
    if (anclaje !== '')
    {
        // Si es así, localizamos el contenedor de la tabla
        var contenedor = document.getElementById(anclaje);

        // Comprobamos si tiene algún hijo
        if (contenedor.childElementCount > 0)
        {
            // De ser así, lo eliminamos
            contenedor.removeChild(contenedor.childNodes[0]);
        }
    }

    // Comprobamos que haya información en el array para mostrar
    if (arrayExpProfesional.length > 0)
    {

        // Creamos un nuevo objeto table
        var tabla = document.createElement('table');

        // Le asignamos un id
        tabla.id = 'tabla_experienciaProf';


        // Creamos una fila para la descripción de las columnas
        var tr = document.createElement('tr');

        // Creamos dos columnas de cabecera
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');
        var th5 = document.createElement('th');

        // Si se ha pasado un anclaje, creamos dos columnas más para albergar 
        // los botones de editar y eliminar
        if (anclaje !== '')
        {
            // Creamos los elementos
            var th6 = document.createElement('th');
            var th7 = document.createElement('th');

            // Les asignamos una clase especial para su visualización
            th6.className = 'reducido';
            th7.className = 'reducido';
        }


        // Creamos los textos para las cabeceras
        var header1 = document.createTextNode('Puesto');
        var header2 = document.createTextNode('Empresa');
        var header3 = document.createTextNode('Inicio');
        var header4 = document.createTextNode('Fín');
        var header5 = document.createTextNode('Descripcion puesto');

        // Si tenemos anclaje, añadimos textos a las cabeceras creadas
        if (anclaje !== '')
        {
            var header6 = document.createTextNode('Editar');
            var header7 = document.createTextNode('Eliminar');
        }


        // Anexamos el texto a las cabeceras
        th1.appendChild(header1);
        th2.appendChild(header2);
        th3.appendChild(header3);
        th4.appendChild(header4);
        th5.appendChild(header5);

        // Si tenemos anclaje, añadimos el texto a las cabeceras
        if (anclaje !== '')
        {
            th6.appendChild(header6);
            th7.appendChild(header7);
        }


        // Y las cabeceras a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);

        // Si tenemso anclaje, añadimos las cabeceras creadas a la fila
        if (anclaje !== '')
        {
            tr.appendChild(th6);
            tr.appendChild(th7);
        }


        // Finalmente agregamos la fila con la descripciónd e las columnas a la tabla
        tabla.appendChild(tr);

        // Iteramos tantas veces como elementos tenga el array de partidos que se nos ha pasado como parámetro
        for (var i = 0; i < arrayExpProfesional.length; i++) {

            // Recuperamos el partido correspondiente a la iteración
            var exp = arrayExpProfesional[i];

            // Creamos una fila nueva para el partido
            tr = document.createElement('tr');

            // Y dos columnas
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');

            // Si tenemos anclaje, creamos dos celdas para albergar los botoenes
            if (anclaje !== '')
            {
                // Creamos las celdas
                var td6 = document.createElement('td');
                var td7 = document.createElement('td');

                // Les asignamos una clase especial para su visualización
                td6.className = 'reducido';
                td7.className = 'reducido';
            }


            // Recuperamos el valor del nombre y del ideario y creamos dos objetos TextNode
            var text1 = document.createTextNode(exp.puesto);
            var text2 = document.createTextNode(exp.empresa);
            var text3 = document.createTextNode(formatearFecha(exp.fechaInicio, true));
            var text4 = document.createTextNode(formatearFecha(exp.fechaFin, true));
            var text5 = document.createTextNode(exp.descripcion);

            // Si tenemos anclaje, creamos los botones de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos una imagén para que sea nuestro botón de edición
                var botonEdit = document.createElement('img');

                // Asignamos una imagen
                botonEdit.src = 'imagenes/edit.png';

                // Le asignamos un tooltip
                botonEdit.title = "Pulse para editar los valores de la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // que se llame a la función necesaria para cargar los datos para edición
                botonEdit.onclick = (function () {
                    var indice = i;
                    return function () {
                        // Llamamos a la función que se encarga de gargar los datos para su modificación
                        cargarDatosModificarExperienciaProfesional(indice);
                    };
                })();

                // Creamos una imagén para que sea nuestro botón de borrado
                var botonDelete = document.createElement('img');

                // Asignamos una imagen
                botonDelete.src = 'imagenes/delete.png';

                // Le asignamos un tooltip
                botonDelete.title = "Pulse para eliminar la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // eliminar el objeto correspondiente a la fila del array de experiencia 
                // profesional y volver a crear la tabla
                botonDelete.onclick = (function () {
                    var indice = i;
                    return function () {

                        // Eliminamos el objeto correspondiene del array de experiencia profesional
                        arrayExpProfesional.splice(indice, 1);

                        // Volvemos a crear la tabla de experiencia profesional
                        crearTablaExperienciaProf(arrayExpProfesional, 'contenedor_tabla_experienciaProf');
                    };
                })();
            }

            // Añadimos los textos a las columnas
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);

            // Si tenemos anclaje, añadimos los botones a las celdas
            if (anclaje !== '')
            {
                td6.appendChild(botonEdit);
                td7.appendChild(botonDelete);
            }

            // Las columnas a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            // Si tenemos anclaje, añadimos las celdas a la fila
            if (anclaje !== '')
            {
                tr.appendChild(td6);
                tr.appendChild(td7);
            }


            // Y la fila a la tabla
            tabla.appendChild(tr);
        }

        // Comprobamos si tenemos anclaje
        if (anclaje !== '')
        {
            // Si es así agregamos la tabla creada dinamicamente al contenedor
            document.getElementById(anclaje).appendChild(tabla);
        }
        else
        {
            // En caso contrario devolvemos la tabla
            return tabla;
        }
    }
}

/**
 * Función que nos permite crear una tabla con los cursos del array
 * @param {array} arrayCursos El array que contiene los objetos con los cursos
 * @param {String} anclaje El id del elemento donde se añadirá la tabla
 * @returns {crearTablaCursos.tabla|Element} Si no se añade un id de anclaje la función devolverá un elemento DOM table
 */
function crearTablaCursos(arrayCursos, anclaje)
{
    // Comprobamos si se ha introducido un valor para anclaje
    if (anclaje !== '')
    {
        // Si es así, localizamos el contenedor de la tabla
        var contenedor = document.getElementById(anclaje);

        // Comprobamos si tiene algún hijo
        if (contenedor.childElementCount > 0)
        {
            // De ser así, lo eliminamos
            contenedor.removeChild(contenedor.childNodes[0]);
        }
    }

    // Comprobamos que el array contiene información para mostrar
    if (arrayCursos.length > 0)
    {
        // Creamos un nuevo objeto table
        var tabla = document.createElement('table');

        // Le asignamos un id
        tabla.id = 'tabla_cursos';

        // Creamos una fila para la descripción de las columnas
        var tr = document.createElement('tr');

        // Creamos dos columnas de cabecera
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');
        var th5 = document.createElement('th');

        // Si tenemos anclaje hay que crear dos columnas extras en la tabla 
        // para albergar los botones de editar y eliminar
        if (anclaje !== '')
        {
            // Creamos las celdas
            var th6 = document.createElement('th');
            var th7 = document.createElement('th');

            // Les añadimos una clase especial para su visualización
            th6.className = 'reducido';
            th7.className = 'reducido';
        }


        // Creamos los textos para las cabeceras
        var header1 = document.createTextNode('Nombre');
        var header2 = document.createTextNode('Institución');
        var header3 = document.createTextNode('Inicio');
        var header4 = document.createTextNode('Fín');
        var header5 = document.createTextNode('Título');

        // Si tenemos anclaje, creamos un texto para las celdas creadas
        if (anclaje !== '')
        {
            var header6 = document.createTextNode('Editar');
            var header7 = document.createTextNode('Eliminar');
        }


        // Anexamos el texto a las cabeceras
        th1.appendChild(header1);
        th2.appendChild(header2);
        th3.appendChild(header3);
        th4.appendChild(header4);
        th5.appendChild(header5);

        // Si tenemos anclaje añadimos el texto a las celdas creadas
        if (anclaje !== '')
        {
            th6.appendChild(header6);
            th7.appendChild(header7);
        }


        // Y las cabeceras a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);

        // Si tenemos anclaje añadimos las celdas a la fila
        if (anclaje !== '')
        {
            tr.appendChild(th6);
            tr.appendChild(th7);
        }

        // Finalmente agregamos la fila con la descripciónd e las columnas a la tabla
        tabla.appendChild(tr);

        // Iteramos tantas veces como elementos tenga el array de partidos que se nos ha pasado como parámetro
        for (var i = 0; i < arrayCursos.length; i++) {

            // Recuperamos el partido correspondiente a la iteración
            var curso = arrayCursos[i];

            // Creamos una fila nueva para el partido
            tr = document.createElement('tr');

            // Y dos columnas
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');

            // Si tenemos anclaje añadimos dos celdas extras para los botones de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos las celdas
                var td6 = document.createElement('td');
                var td7 = document.createElement('td');

                // Les añadimos una clase especial para su visualización
                td6.className = 'reducido';
                td7.className = 'reducido';

            }


            // Recuperamos el valor del nombre y del ideario y creamos dos objetos TextNode
            var text1 = document.createTextNode(curso.nombre);
            var text2 = document.createTextNode(curso.institucion);
            var text3 = document.createTextNode(formatearFecha(curso.fechaInicio, true));
            var text4 = document.createTextNode(formatearFecha(curso.fechaFin, true));
            var text5 = document.createTextNode(curso.tituloObtenido);

            // Si tenemos anclaje creamos los botones de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos una imagén para que sea nuestro botón de edición
                var botonEdit = document.createElement('img');

                // Asignamos una imagen
                botonEdit.src = 'imagenes/edit.png';

                // Le asignamos un tooltip
                botonEdit.title = "Pulse para editar los valores de la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // que se llame a la función necesaria para cargar los datos para edición
                botonEdit.onclick = (function () {
                    var indice = i;
                    return function () {
                        // Llamamos a la función encargada de cargar los datos para modificar
                        cargarDatosModificarCursos(indice);
                    };
                })();

                // Creamos una imagén para que sea nuestro botón de borrado
                var botonDelete = document.createElement('img');

                // Asignamos una imagen
                botonDelete.src = 'imagenes/delete.png';

                // Le asignamos un tooltip
                botonDelete.title = "Pulse para eliminar la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // eliminar el objeto correspondiente a la fila del array de cursos y 
                // volver a crear la tabla
                botonDelete.onclick = (function () {
                    var indice = i;
                    return function () {

                        // Eliminamos el objeto correspondiene del array de cursos
                        arrayCursos.splice(indice, 1);

                        // Volvemos a crear la tabla de cursos
                        crearTablaCursos(arrayCursos, 'contenedor_tabla_cursos');
                    };
                })();

            }
            // Añadimos los textos a las columnas
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);

            // Si tenemos anclaje añadimos los botones a las celdas creadas
            if (anclaje !== '')
            {
                td6.appendChild(botonEdit);
                td7.appendChild(botonDelete);
            }


            // Las columnas a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            // Si tenemos anclaje añadimos las celdas extras a la fila
            if (anclaje !== '')
            {
                tr.appendChild(td6);
                tr.appendChild(td7);
            }


            // Y la fila a la tabla
            tabla.appendChild(tr);
        }

        // Comprobamos si tenemos anclaje
        if (anclaje !== '')
        {
            // De ser así agregamos la tabla creada dinamicamente al contenedor
            document.getElementById(anclaje).appendChild(tabla);
        }
        else
        {
            // En caso contrario devolvemos la tabla recién creada
            return tabla;
        }
    }
}

/**
 * Función que nos permite crear una tabla con los idiomas del array
 * @param {array} arrayIdiomas El array que contiene los objetos con los idiomas
 * @param {String} anclaje El id del elemento donde se añadirá la tabla
 * @returns {Element|crearTablaIdiomas.tabla} 
 */
function crearTablaIdiomas(arrayIdiomas, anclaje)
{
    // Comprobamos si tenemos valor para anclaje
    if (anclaje !== '')
    {
        // Si es así localizamos el contenedor de la tabla
        var contenedor = document.getElementById(anclaje);

        // Comprobamos si tiene algún hijo
        if (contenedor.childElementCount > 0)
        {
            // De ser así, lo eliminamos
            contenedor.removeChild(contenedor.childNodes[0]);
        }
    }

    // Comprobamos si hay información que mostrar en el array
    if (arrayIdiomas.length > 0)
    {

        // Creamos un nuevo objeto table
        var tabla = document.createElement('table');

        // Le asignamos un id
        tabla.id = 'tabla_idiomas';


        // Creamos una fila para la descripción de las columnas
        var tr = document.createElement('tr');

        // Creamos dos columnas de cabecera
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');

        // Si tenemos valor para anclaje creamos dos columnas más que 
        // albergarán los botones de editar y eliminar
        if (anclaje !== '')
        {
            // Creamos dos celdas extras
            var th3 = document.createElement('th');
            var th4 = document.createElement('th');

            // Les añadimos una clase especial para su visualización
            th3.className = 'reducido';
            th4.className = 'reducido';
        }

        // Creamos los textos para las cabeceras
        var header1 = document.createTextNode('Idioma');
        var header2 = document.createTextNode('Nivel');

        // Si tenemos anclaje creamos textos para las celdas extras creadas
        if (anclaje !== '')
        {
            var header3 = document.createTextNode('Editar');
            var header4 = document.createTextNode('Eliminar');
        }

        // Anexamos el texto a las cabeceras
        th1.appendChild(header1);
        th2.appendChild(header2);

        // Si tenemos anclaje anexamos el texto a las celdas extras
        if (anclaje !== '')
        {
            th3.appendChild(header3);
            th4.appendChild(header4);
        }

        // Y las cabeceras a la fila
        tr.appendChild(th1);
        tr.appendChild(th2);

        // Si tenemos anclaje, añadimos las celdas extras a la fila
        if (anclaje !== '')
        {
            tr.appendChild(th3);
            tr.appendChild(th4);
        }

        // Finalmente agregamos la fila con la descripciónd e las columnas a la tabla
        tabla.appendChild(tr);

        // Iteramos tantas veces como elementos tenga el array de partidos que se nos ha pasado como parámetro
        for (var i = 0; i < arrayIdiomas.length; i++) {

            // Recuperamos el partido correspondiente a la iteración
            var idi = arrayIdiomas[i];

            // Creamos una fila nueva para el partido
            tr = document.createElement('tr');

            // Y dos columnas
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            // Si tenemos anclaje creamos dos celdas extras para los botones de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos las celdas
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');

                // Les añadimos una clase especial para su visualización
                td3.className = 'reducido';
                td4.className = 'reducido';
            }

            // Recuperamos el valor del nombre y del ideario y creamos dos objetos TextNode
            var text1 = document.createTextNode(idi.idioma);
            var text2 = document.createTextNode(idi.nivel);

            // Si tenemos anclaje, creamos los botoenes de editar y eliminar
            if (anclaje !== '')
            {
                // Creamos una imagén para que sea nuestro botón de edición
                var botonEdit = document.createElement('img');

                // Asignamos una imagen
                botonEdit.src = 'imagenes/edit.png';

                // Le asignamos un tooltip
                botonEdit.title = "Pulse para editar los valores de la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // que se llame a la función necesaria para cargar los datos para edición
                botonEdit.onclick = (function () {
                    var indice = i;
                    return function () {
                        // Llamamos a la función correspondiente para cargar los datos 
                        // para su modificación
                        cargarDatosModificarIdiomas(indice);
                    };
                })();

                // Creamos una imagén para que sea nuestro botón de borrado
                var botonDelete = document.createElement('img');

                // Asignamos una imagen
                botonDelete.src = 'imagenes/delete.png';

                // Le asignamos un tooltip
                botonDelete.title = "Pulse para eliminar la linea";

                // Y asiganamos así mismo una función al evento onclick, en este caso, 
                // eliminar el objeto correspondiente a la fila del array de idiomas y 
                // volver a crear la tabla
                botonDelete.onclick = (function () {
                    var indice = i;
                    return function () {
                        // Eliminamos el objeto correspondiene del array de idiomas
                        arrayIdiomas.splice(indice, 1);

                        // Volvemos a crear la tabla de idiomas
                        crearTablaIdiomas(arrayIdiomas, 'contenedor_tabla_idiomas');
                    };
                })();
            }

            // Añadimos los textos a las columnas
            td1.appendChild(text1);
            td2.appendChild(text2);

            // Si tenemos anclaje añadimos los botones creados a las celdas extras
            if (anclaje !== '') {
                td3.appendChild(botonEdit);
                td4.appendChild(botonDelete);
            }

            // Las columnas a la fila
            tr.appendChild(td1);
            tr.appendChild(td2);

            // Si tenemos anclaje, añadimos las celdas extras a la fila
            if (anclaje !== '')
            {
                tr.appendChild(td3);
                tr.appendChild(td4);
            }

            // Y la fila a la tabla
            tabla.appendChild(tr);
        }

        // Comprobamos si enemos anclaje
        if (anclaje !== '')
        {
            // Si es así, agregamos la tabla creada dinamicamente al contenedor
            document.getElementById(anclaje).appendChild(tabla);
        }
        else
        {
            // En caso contrario devolvemos la tabla
            return tabla;
        }
    }
}

/**
 * Función que nos permite cargar los datos de un idioma para su posterior modificación
 * @param {int} indice El indice del array que apunta al objeto Idioma que queremos modificar
 * @returns {undefined} 
 */
function cargarDatosModificarIdiomas(indice)
{
    // Cargamos la información del objeto del array con el valor del índice pasado 
    // como parámetro en los campos correspondientes
    document.getElementById('idioma').value = arrayIdiomas[indice].idioma;
    document.getElementById('nivel').value = arrayIdiomas[indice].nivel;

    // Asignamos un valor al campo oculto
    document.getElementById('modoIdioma').value = indice;

}

/**
 * Función que nos permite cargar los datos de un curso para su posterior modificación
 * @param {int} indice El indice del array que apunta al objeto Curso que queremos modificar 
 * @returns {undefined} 
 */
function cargarDatosModificarCursos(indice)
{
    // Cargamos la información del objeto del array con el valor del índice pasado 
    // como parámetro en los campos correspondientes    
    document.getElementById('nombrecurso').value = arrayCursos[indice].nombre;
    document.getElementById('institucioncurso').value = arrayCursos[indice].institucion;

    // Usamos la función de formatear fechas para pasar el valor al formato correcto antes de asignarlo al input
    document.getElementById('fcomienzo').value = formatearFecha(arrayCursos[indice].fechaInicio, false);
    document.getElementById('ffin').value = formatearFecha(arrayCursos[indice].fechaFin, false);

    document.getElementById('titulo').value = arrayCursos[indice].tituloObtenido;

    // Asignamos un valor al campo oculto
    document.getElementById('modoCurso').value = indice;

}

/**
 * Función que nos permite cargar los datos de una experiencia profesional para su posterior modificación
 * @param {int} indice El indice del array que apunta al objeto ExperienciaProfesional que queremos modificar 
 * @returns {undefined} 
 */
function cargarDatosModificarExperienciaProfesional(indice)
{
    // Cargamos la información del objeto del array con el valor del índice pasado 
    // como parámetro en los campos correspondientes    
    document.getElementById('empresa').value = arrayExpProfesional[indice].empresa;
    document.getElementById('puesto').value = arrayExpProfesional[indice].puesto;

    // Usamos la función de formatear fechas para pasar el valor al formato correcto antes de asignarlo al input
    document.getElementById('fcomienzoprofesional').value = formatearFecha(arrayExpProfesional[indice].fechaInicio, false);
    document.getElementById('ffinprofesional').value = formatearFecha(arrayExpProfesional[indice].fechaFin, false);

    document.getElementById('descripcionPuesto').value = arrayExpProfesional[indice].descripcion;

    // Asignamos un valor al campo oculto
    document.getElementById('modoExp').value = indice;
}

/**
 * Función que nos permite cargar los datos de una información académica para su posterior modificación
 * @param {int} indice El indice del array que apunta al objeto InfoAcademica que queremos modificar 
 * @returns {undefined} 
 */
function cargarDatosModificarInformacionAcademica(indice)
{
    // Cargamos la información del objeto del array con el valor del índice pasado 
    // como parámetro en los campos correspondientes    
    document.getElementById('institucionacademica').value = arrayInfoAcademica[indice].institucion;
    document.getElementById('tituloacademico').value = arrayInfoAcademica[indice].titulo;

    // Usamos la función de formatear fechas para pasar el valor al formato correcto antes de asignarlo al input
    document.getElementById('fcomienzoacademico').value = formatearFecha(arrayInfoAcademica[indice].fechaInicio, false);
    document.getElementById('ffinacademico').value = formatearFecha(arrayInfoAcademica[indice].fechaFin, false);

    document.getElementById('comentarios').value = arrayInfoAcademica[indice].comentarios;

    // Asignamos un valor al campo oculto
    document.getElementById('modoInAc').value = indice;

}

/**
 * Función que nos permite mostrar el curriculum en pantalla
 * @param {Curriculum} curriculum El objeto curriculum que contiene toda la información
 * @returns {undefined} 
 */
function mostrarCurriculum(curriculum)
{
    // Localizamos el cuerpo de la página usando su id
    var cuerpo = document.getElementById('cuerpo');

    // Iteramos mientras el cuerpo tenga hijos
    while (cuerpo.childElementCount > 0)
    {
        // Eliminamos el primer hijo que contenga el cuerpo
        cuerpo.removeChild(cuerpo.childNodes[0]);
    }

    // Con el cuerpo de la página limpio, nos disponemos a mostrar el curriculum del usuario    
    // Anexamos una cabecera centrada con las palabras Currículum Vítae
    cuerpo.appendChild(crearCabecera("Currículum Vítae", 2, 'centrado'));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Añadimos una cabecera con las Datos Personales
    cuerpo.appendChild(crearCabecera("Datos Personales", 4, ''));

    // Creamos una etiqueta con el nombre del usuario
    cuerpo.appendChild(crearLabel("Nombre: ", curriculum.objDatosPersonales.nombre, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con los apellidos del usuario
    cuerpo.appendChild(crearLabel("Apellidos: ", curriculum.objDatosPersonales.apellidos, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con la dirección del usuario
    cuerpo.appendChild(crearLabel("Dirección: ", curriculum.objDatosPersonales.direccion, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con la ciudad del usuario
    cuerpo.appendChild(crearLabel("Ciudad: ", curriculum.objDatosPersonales.ciudad, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    cuerpo.appendChild(crearLabel("Población: ", curriculum.objDatosPersonales.poblacion, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con el código postal del usuario
    cuerpo.appendChild(crearLabel("Código Postal: ", curriculum.objDatosPersonales.cod_postal, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con el teléfono del usuario
    cuerpo.appendChild(crearLabel("Telefono: ", curriculum.objDatosPersonales.email, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con el E-Mail del usuario
    cuerpo.appendChild(crearLabel("E-Mail: ", curriculum.objDatosPersonales.email, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con la fecha de nacimiento del usuario
    cuerpo.appendChild(crearLabel("Fecha de Nacimiento: ", curriculum.objDatosPersonales.fecha_nacimiento, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con el lugar de nacimiento del usuario
    cuerpo.appendChild(crearLabel("Lugar de Nacimiento: ", curriculum.objDatosPersonales.lugar_nacimiento, ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Creamos una etiqueta con el estado civil del usuario
    cuerpo.appendChild(crearLabel("Estado Civil: ", curriculum.objDatosPersonales.estado_civil, ''));

    // Añadimos dos br
    cuerpo.appendChild(document.createElement('br'));
    cuerpo.appendChild(document.createElement('br'));

    // Añadimos una cabecera con las palabras Información Académica
    cuerpo.appendChild(crearCabecera("Información Académica", 4, ''));

    // Comprobamos si el array de información académica tiene tamaño
    if (curriculum.arrInformacionAcademica.length === 0)
    {
        // Si no lo tiene mostramos que no hay información
        cuerpo.appendChild(crearLabel("Sin información académica", '', ''));
    }
    else
    {
        // Si lo hay, creamos un div para albergar la tabla
        var div = document.createElement('div');

        // Le especificamos la clase
        div.className = 'tablaDatos';

        // Le añadimos la tabla
        div.appendChild(crearTablaInfoAcademica(curriculum.arrInformacionAcademica, ''));

        // Lo añadimos al cuerpo
        cuerpo.appendChild(div);
    }

    // Añadimos una cabecera con las palabras Experiencia Profesional
    cuerpo.appendChild(crearCabecera("Experiencia Profesional", 4, ''));

    // Comprobamos si el array de experiencia profesional tiene tamaño
    if (curriculum.arrExperienciaProfesional.length === 0)
    {
        // Si no lo tiene mostramos que no hay información
        cuerpo.appendChild(crearLabel("Sin experiencia profesional", '', ''));
    }
    else
    {
        // Si lo hay, creamos un div para albergar la tabla
        var div = document.createElement('div');

        // Le especificamos la clase
        div.className = 'tablaDatos';

        // Le añadimos la tabla
        div.appendChild(crearTablaExperienciaProf(curriculum.arrExperienciaProfesional, ''));

        // Lo añadimos al cuerpo
        cuerpo.appendChild(div);
    }

    // Añadimos una cabecera con las palabras Cursos Realizados
    cuerpo.appendChild(crearCabecera("Cursos Realizados", 4, ''));

    // Comprobamos si el array de experiencia profesional tiene tamaño
    if (curriculum.arrCursos.length === 0)
    {
        // Si no lo tiene mostramos que no hay información
        cuerpo.appendChild(crearLabel("Sin cursos", '', ''));
    }
    else
    {
        // Si lo hay, creamos un div para albergar la tabla
        var div = document.createElement('div');

        // Le especificamos la clase
        div.className = 'tablaDatos';

        // Le añadimos la tabla
        div.appendChild(crearTablaCursos(curriculum.arrCursos, ''));

        // Lo añadimos al cuerpo
        cuerpo.appendChild(div);
    }

    // Añadimos una cabecera con la palabra Idiomas
    cuerpo.appendChild(crearCabecera("Idiomas", 4, ''));

    // Comprobamos si el array de experiencia profesional tiene tamaño
    if (curriculum.arrIdiomas.length === 0)
    {
        // Si no lo tiene mostramos que no hay información
        cuerpo.appendChild(crearLabel("Sin idiomas", '', ''));
    }
    else
    {
        // Si lo hay, creamos un div para albergar la tabla
        var div = document.createElement('div');

        // Le especificamos la clase
        div.className = 'tablaDatos';

        // Le añadimos la tabla
        div.appendChild(crearTablaIdiomas(curriculum.arrIdiomas, ''));

        // Lo añadimos al cuerpo
        cuerpo.appendChild(div);
    }

    // Añadimos una cabecera con las palabras Conocimientos Adicionales
    cuerpo.appendChild(crearCabecera("Conocimientos Adicionales", 4, ''));

    // Creamos una etiqueta con los conocimientos adicionales del usuario
    cuerpo.appendChild(crearLabel(curriculum.conocimientos, '', ''));

    // Añadimos un br
    cuerpo.appendChild(document.createElement('br'));

    // Añadimos una cabecera con la palabra Hobbies
    cuerpo.appendChild(crearCabecera("Hobbies", 4, ''));

    // Creamos una etiqueta con los hobbies del usuario
    cuerpo.appendChild(crearLabel(curriculum.hobbies, '', ''));

    // Añadimos tres br para separar
    cuerpo.appendChild(document.createElement('br'));
    cuerpo.appendChild(document.createElement('br'));
    cuerpo.appendChild(document.createElement('br'));

    // Creamos un elemento anchor para asociar un enlace para descargar la carta de presentación
    var enlace = document.createElement('a');
    
    // Le asignamos el atributo href con valor nulo para que se le pueda hacer click
    enlace.setAttribute('href',"");
    
    // Le ponemos un texto descriptivo al enlace
    enlace.innerHTML = "Haga click para descargar la carta de presentación";
    
    // Añadimos un evento al enlace para que al hacer click en el se llame a la 
    // función invokeSaveAsDialog pasándole como parámetros el objeto File y el 
    // nombre del fichero
    enlace.addEventListener('click', function (){invokeSaveAsDialog(curriculum.cartaPresentacion, curriculum.cartaPresentacion.name);}, false);
    
    // Para finalizar, añadimos el enlace al cuerpo de la página
    cuerpo.appendChild(enlace);
}

/**
 * Función que nos permite cargar de datos del select de poblaciones dependiendo del valor de la ciudad seleccionada
 * @returns {undefined}
 */
function cargarSelectPoblaciones()
{
    // Seleccionamos los desplegables
    var desplegablePoblacion = document.getElementById("poblacion");
    var desplegableCiudad = document.getElementById("ciudad");

    // Limpiamos el desplegable de poblaciones de la información que pudiese contener
    limpiarSelect(desplegablePoblacion);


    // Iteramos por el array de la ciudad seleccionada dentro del array de poblaciones
    for (var i = 0; i < arrayPoblaciones[desplegableCiudad.selectedIndex].length; i++)
    {
        // Creamos objetos option para añadir al select de poblaciones
        var option = document.createElement("option");
        option.value = arrayPoblaciones[desplegableCiudad.selectedIndex][i][0];
        option.innerHTML = arrayPoblaciones[desplegableCiudad.selectedIndex][i][0];
        desplegablePoblacion.appendChild(option);
    }

    // Recuperamos el código postal para que se muestre por defecto el valor seleccionado
    recuperarCodigoPostal();

}

/**
 * Función que nos permite recuperar el código postal de una población a partir de la población y ciudad seleccionadas
 * @returns {undefined}
 */
function recuperarCodigoPostal()
{
    // Recuperamos el indice que tienen seleccionados los desplegables
    var indicePoblacion = document.getElementById('poblacion').selectedIndex;
    var indiceCiudad = document.getElementById('ciudad').selectedIndex;

    // Recuperamos la etiqueta donde va a ir el código postal
    var lblCodigoPostal = document.getElementById('codpostal');

    // Asignamos el valor contenido en el array de poblaciones a la etiqueta
    lblCodigoPostal.value = arrayPoblaciones[indiceCiudad][indicePoblacion][1];
    lblCodigoPostal.innerHTML = arrayPoblaciones[indiceCiudad][indicePoblacion][1];



}

/**
 * Función que nos permite transformar una fecha en una cadena en formato DD/MM/YYYY
 * @param {string} fecha La fecha a formatear
 * @param {bool} ddmmyyyy Especifica si la fecha será devuelta en formato ddmmyyy
 * @returns {String} La fecha formateada en formato DD/MM/YYY o en formato YYYY-MM-DD
 */
function formatearFecha(fecha, ddmmyyyy)
{
    // Creamos un objeto fecha a partir de la fecha introducida como parámetro
    var date = new Date(fecha);

    // Recuperamos el dia
    var dd = date.getDate();

    // Recuperamos el mes, añadiendole uno, puesto que sus valores van de 0 a 11
    var mm = date.getMonth() + 1;

    // Recuperamos el año completo
    var yyyy = date.getFullYear();

    // Comprobamos si el dia es menor que 10, si lo es añadimos un 0 celante
    if (dd < 10) {
        dd = '0' + dd;
    }

    // Lo mismo para los meses
    if (mm < 10) {
        mm = '0' + mm;
    }

    // Verificamos si tenemos que devolver la fecha en formato ddmmyyyy
    if (ddmmyyyy)
    {
        // si es así, concatenamos el dia, el mes y el año y devolvemos la cadena resultante
        return dd + '/' + mm + '/' + yyyy;
    }
    else
    {
        // En caso contrario concatenamos en orden inverso y separando por guiones
        return yyyy + '-' + mm + '-' + dd;
    }
}

/**
 * Elimina los objetos <option> de un objeto <select>
 * @param {DOM object} select El objeto select que queremos limpiar
 * @returns {undefined}
 */
function limpiarSelect(select)
{
    // Comprobamos si el objeto tiene algún objeto <option>
    if (select.length > 0) {

        // Si es así, iteramos por todos
        while (select.length !== 0)
        {
            // Y los eliminamos
            select.remove(0);
        }
    }
}

/**
 * Función que nos permite crear un objeto label
 * @param {String} encabezado El encabezado que queremos mostrar en la etiqueta
 * @param {String} texto El texto que queremos mostrar en la etiqueta
 * @param {String} clase La clase que queremos que tenga el texto de la etiqueta
 * @returns {DOM Object} Devuelv un objeto label con un texto añadido en su interior
 */
function crearLabel(encabezado, texto, clase)
{
    // Creamos varias etiquetas para mostrar los resultados
    var lblTextoEtiqueta = document.createElement('label');

    // Asignamos los resultados a las etiquetas correspondientes
    lblTextoEtiqueta.appendChild(document.createTextNode(encabezado));

    // Creamos varias etiquetas para mostrar los resultados
    var lblEtiqueta = document.createElement('label');

    // Asignamos los resultados a las etiquetas correspondientes
    lblEtiqueta.appendChild(document.createTextNode(texto));

    // Asignamos clases a cada uno de los labels para luego darles estilo
    lblEtiqueta.className = clase;

    // Anexamos el valor de la etiqueta al texto
    lblTextoEtiqueta.appendChild(lblEtiqueta);

    // Devolvemos el objeto creado
    return lblTextoEtiqueta;
}

/**
 * Función que nos permite crear un objeto header
 * @param {String} texto El texto que queremos mostrar en el encabezado
 * @param {int} numero El tipo de cabecera que queremos crear, h1, h2, h3, etc..
 * @param {String} clase La clase que queremos que tenga la cabecera
 * @returns {DOM Object} Devuelve un objeto header con un el texto especificado
 */
function crearCabecera(texto, numero, clase)
{
    // Creamos un elemento cabecera
    var cabecera = document.createElement('h' + numero);

    // Asignamos el texto a la cabecera
    cabecera.appendChild(document.createTextNode(texto));

    // Asignamos una clase a la cabecera
    cabecera.className = clase;

    // Devolvemos el objeto creado
    return cabecera;
}

/**
 * Función para guardar un archivo en local
 * @param {Blob} file Objeto File o Blob que se quiere grabar
 * @param {string} fileName Opcional El nombre del fichero
 */
function invokeSaveAsDialog(file, fileName)
{

    // Comprobamos si se ha introducido un fichero como parámetro, 
    // si no lanzamos una excepción
    if (!file) {
        throw 'Blob object is required.';
    }

    // Comprobamos que el fichero tenga tipo. si no le asignamos uno
    if (!file.type) {
        file.type = 'video/webm';
    }

    // Almacenamos la extensión del fichero
    var fileExtension = file.type.split('/')[1];

    // Comprobamos si el nombre del fichero está bien formado
    if (fileName && fileName.indexOf('.') !== -1)
    {
        // Almacenamos el nombre y la extensión por separado
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    // Generamos un nombre aleatoriamente para el fichero
    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    // Comprobamos las capacidades del navegador para grabar el fichero
    if (typeof navigator.msSaveOrOpenBlob !== 'undefined')
    {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    }
    else if (typeof navigator.msSaveBlob !== 'undefined')
    {
        return navigator.msSaveBlob(file, fileFullName);
    }

    // Creamos un enlace para el fichero
    var hyperlink = document.createElement('a');

    // Le asignamos al enlace la url del fichero
    hyperlink.href = URL.createObjectURL(file);

    // Le asignamos el blanco
    hyperlink.target = '_blank';

    // Y le asignamos el nombre generado aleatoriamente
    hyperlink.download = fileFullName;

    // Añadimos al enlace un evento
    if (!!navigator.mozGetUserMedia) {
        hyperlink.onclick = function () {
            (document.body || document.documentElement).removeChild(hyperlink);
        };
        (document.body || document.documentElement).appendChild(hyperlink);
    }

    // Creamos un nuevo evento
    var evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    // Y hacemos que el enlace lo ejecute
    hyperlink.dispatchEvent(evt);

    if (!navigator.mozGetUserMedia) {
        URL.revokeObjectURL(hyperlink.href);
    }
}