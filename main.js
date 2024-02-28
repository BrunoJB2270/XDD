/*Declarar un array vacio para almacenar nombres */
var nombre_alumno_array = [];


/*Crear la función submit()*/
function submit()
	{
        /*Llamar el valor de los nombres de los alumnos según el id*/
        var nombre_1 = document.getElementById("nombre_alumno_1").value;
        var nombre_2 = document.getElementById("nombre_alumno_2").value;
        var nombre_3 = document.getElementById("nombre_alumno_3").value;
        var nombre_4 = document.getElementById("nombre_alumno_4").value;

        /*Introducir una por una estas variables dentro del array vacío. 
        Usar el metodo .push para poner el nombre de cada alumno en la variable*/
        nombre_alumno_array.push(nombre_1);
        nombre_alumno_array.push(nombre_2);
        nombre_alumno_array.push(nombre_3);
        nombre_alumno_array.push(nombre_4);
       
        /* Imprimir en la consola la variable array*/
	console.log(nombre_alumno_array);
		
        /*Llamar el documento para actualizar la etiqueta div con el id "ver_nombre" para ver los resultados*/
           document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;

	}

