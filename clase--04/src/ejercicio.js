/** Ejercicio en Clase: Moment **/

import moment from "moment";

const fechaActual = moment(); 
//Constante que almacena la fecha actual

const fechaNacimiento = moment("1987-03-10"); 
//Constante con la fecha de mi nacimiento

if(fechaNacimiento.isValid()) {
    let diasPasados = fechaActual.diff(fechaNacimiento, "days"); 

    //Mostramos el resultado por consola: 
    console.log(`Pasaron ${diasPasados} desde que naci hasta hoy`);
} else {
    console.log(`La fecha de nacimiento no es valida`); 
}

