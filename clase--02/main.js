/** CLASE 2 - Nuevas Funcionalidades de ECMAScript **/

//ES7: fue lanzada en el año 2016. 
// - Operador de exponenciación 
// - Includes: me permite saber si hay un elemento determinado en un array. 

//Antes de ES7:

let base = 4; 
let exponente = 3; 

let resultado = Math.pow(base, exponente); 
console.log(resultado);

//Con ES7: 

let resultadoNuevo = base ** exponente; 
console.log(resultadoNuevo);

//INCLUDES: 

let teletubbies = ["dipsi", "lala", "po", "tinki winki"]; 

console.log(teletubbies.indexOf("homero") > -1); //true

//Ahora con ES7: 

console.log(teletubbies.includes("pao")); 
//Me retorna un valor booleano, si lo encuentra es verdadero si no lo encentra es falsete. 

//Version ES8: llega en el año 2017. 
//Uno de los cambios principales es la llegada de async await. Pero lo vemos despues del almuerzo. 

//Object.values, Object.entries, Object.keys = estos metodos estaticos nos permite obtener los valores de n objeto de una forma mas simple. 

const empleado = {
    nombre: "Pepe", 
    apellido: "Argento", 
    edad: 45, 
    puesto: "Vendedor de zapatos"
}

//Values: 

let resultadoEmpleadoValues = Object.values(empleado); 
//Toma los valores de las propiedades y las almacena en un array. 
console.log(resultadoEmpleadoValues);

//Keys: 

let resultadoEmpleadoKeys = Object.keys(empleado);
//Toma las keys de las propiedades y las almacena en un array: 
console.log(resultadoEmpleadoKeys);

//Entries: 

let resultadoEmpleadoEntries = Object.entries(empleado); 
//Devuelve un array de arrays, donde cada sub-array contiene clave y valor. 
console.log(resultadoEmpleadoEntries);

//ES9: llega a nuestra vida en el año 2018. 
//Acá se mejoró el manejo de las promesas al incorporar el método "finally()". Recuerden que este se ejecuta siempre, tanto si la promesa se resuelve o si se rechaza. 

//Spread Operator: Operador de propagacion. 

//Nos permite desparramar los elementos de un iterable (array u objeto), de forma individual en otro contexto. Y ese contexto puede ser un array, un objeto o una funcion. 

let arrayNombres = ["Ema", "Adrian", "Alejandro","Pao", "Cecilia"]; 
console.log(...arrayNombres);

console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3], arrayNombres[4]);

//Copia de objetos: 

const coky = {
    nombre: "Coky", 
    apellido: "Argento", 
    edad: 17
}

//const coky2 = coky; //Esto no es lo recomendado!
//Aca pensamos que estamos copiando los datos simplemente 

const coky2 = {...coky}

//Pero si cambio algun valor: 
coky2.edad = 38; 

console.log(coky);
console.log(coky2);

// Concatenar Arrays: 

let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8 , 9, 10];

let numerosConcatenados = [...numeros, ...numeros2];
console.log(numerosConcatenados);

//Pasar argumentos a una funcion: 

const sumar = (a, b, c) => {
    console.log(a + b + c);
}

const numerosASumar = [6, 6, 5];

sumar(...numerosASumar);

//ES10: La version 10 fue lanzada en el año 2019. 
// Trim = me permite eliminar los espacios en las cadenas de caracteres. Muy util para validar formularios. 
// Flat = nos permite aplanar un array. 

//TRIM: 

let fraseConEspacios = "   Hola, mi nombres es Samuel   "; 
console.log(fraseConEspacios.trim());

//Flat: nos permite aplanar un array, es decir, convertir un array multidimensional en un array de una sola dimension. 

//Ejemplo: 

let arrayMultidimensional = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]; 
//console.log(arrayMultidimensional);

console.log(arrayMultidimensional.flat(2)); 
//El 2 que pasamos como parametro, es la profundidad del array. Si no le pasamos nada, por defecto es 1. 

//DESESTRUCTURACION: esta herramienta nos permite extraer datos de un array u objeto de forma mas sencilla y legible. 

const pelicula = {
    titulo: "El Padrino", 
    director: "Francis Ford Coppola",
    genero: "Drama", 
    lanzamiento: 1972
}

//Antes : 

let titulo = pelicula.titulo; 
titulo = "Titanic"; 
console.log(titulo);
console.log(pelicula);

//Ahora con la desestructuracion yo puedo hacer lo siguiente: 

let {titulo:tituloPeli, director, genero, lanzamiento} = pelicula; 
console.log(director);
console.log(lanzamiento);
//Recueden que estamos trabajando con copias de informacion, el objeto original no cambia. 

//Ejemplo con Arrays: 

const numeritos = [1 ,2, 3, 4, 5]; 

//Antes: 

let uno = numeritos[0];
let dos = numeritos[1]; 

//Ahora: 

let [,, indiceDos] = numeritos;
console.log(indiceDos); // 3

//Valores por defecto: 

function saludar(nombre = "Invitado") {
    console.log(`Hola ${nombre} bienvenido!`);
}

saludar("Firulais");
saludar();

//Trabajo por modulos: 

//Si yo quisiera importar el array productosMarolio que exportamos en datos.js, lo puedo hacer de la siguiente manera: 

import productosMarolio from "./datos.js";
console.log(productosMarolio);


//ES11 llega en el año 2020. 
//Tiene dos grandes cambios: 
// - Nullish Coalescing: 
// - Acceso condicional a objetos

//Nullish nos permite establecer un valor por defecto cuadno tenemos null o undefined. 

let cliente = undefined; 

console.log(cliente ?? "Anonimo"); 


//Acceso condicional a objetos me permite controlar errores. 

let alumno = null; 

console.log(alumno?.nombre); 

//alert("Aca hay mas codigo");

// Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.

class Persona {
    #nombre; 
    #edad; 
    constructor(nombre, edad) {
        this.#nombre = nombre; 
        this.#edad = edad; 
    }
    getNombre() {
        return this.#nombre;
    }
}

const personita = new Persona("Homero", 39);
console.log(personita.nombre);
//Utilizando el método get: 
console.log(personita.getNombre()); 
