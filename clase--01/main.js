/** PRINCIPIOS BASICOS DE JAVASCRIPT **/

//Temas: 

//1) Plantillas literales
//2) Funciones
//3) Scope
//4) Closures
//5) Clases y POO en JS

///////////////////////////////////////////////////////////////////////////////

//PLANTILLAS LITERALES: son una forma mas simple de concatenar strings en nuestras aplicaciones. 

//antes: 

let mascota = "Fatiga"; 

let mascotaEdad = 5; 

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años. ");

//ahora: 

console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad + 1} años`); 
//alt + 92

//2) Funciones: son bloques de código que podemos reutilizar en nuestro programa. Es importante destacar que una funcion debe tener una sola responsabilidad, es decir que haga una cosa. 


//Tenemos dos tipos de funciones: Declarativas y Expresivas.

//DECLARATIVAS: 

//1 paso, las declaramos: 

function saludar(numeroComision) {
    //Aca colocamos el bloque de codigo que queremos que se ejecute en cada uso. 
    console.log("Hola comision " + numeroComision); 
}


//2 paso, las invocamos 

saludar("70230");

//Se puede invocar una funcion antes de su declaracion gracias al "hoisting" (elevacion), que es un proceso interno que realiza el lenguaje durante la lectura del codigo, en donde eleva las declaraciones de las funciones. Cuidado! Solo en las declarativas. 

//EXPRESIVAS: 

//Las trabajamos asignadolas a variables: 

//Funcion anonima: 

let nuevoSaludo = function(curso) {
    console.log("La mejor comision del mundo: " + curso);
}

nuevoSaludo("Backend"); 

//Función flecha: son una forma mas corta de escribir funciones expresivas
//> alt 92 
//< alt 90

let ultimoSaludo =  () => {
    console.log("Funcion ultimoSaludo"); 
}

ultimoSaludo(); 

//Se puede resumir mas: 

let chau = numCurso => console.log("Chauuuu " + numCurso); 

chau(70320);

//Scope: 
//El scope es el alcance que tienen las variables dentro de nuestro programa. 
//En JS tenemos dos tipos de scope que son: 

//Scope global: las variables declaradas en este scope pueden ser accedidas desde cualquier parte del programa. 

//Scope local: las variables declaradas en este scope solo puede ser accedidas desde el bloque en el fueron declaradas. 

let global = 2024; 
//global es una variable global. 

function saludito() {
    console.log("Hola, estamos en el año " + global); 
    //llamamos a la variable global desde la funcion saludito.

    let curso = "Backend"; 
    console.log("Estamos estudiando " + curso); 
}

saludito(); 
//console.log("Estamos estudiando " + curso); 

//3) CLOSURES: los cierres o clausulas en JS es un concepto que se refiere a la capacidad de una funcion anidada de acceder a las variables de su funcion padre, incluso cuando la funcion padre ya termino de su ejecucion. 

function padre() {
    let deuda = 1500000; 
    function anidada() {
        console.log(deuda); 
    }
    return anidada; 
}

let clausula = padre(); 
clausula(); 

//4) Clases: son moldes que nos permiten crear objetos con caracteristicas similares. 

//Creamos la clase Persona: 

class Persona {
    //Podemos implementar una función constructora, que se ejecuta cuando creamos un objeto a partir de esta clase: 
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad;
        //La palabra reservada "this" hace referencia al objeto que se esta creando. 
        //Cada vez que creamos un objeto a partir de una clase decimos que estamos creando una instancia de esa clase. 
    }
    //Tambien podemos agregar metodos. 
    saludar() {
        console.log("Hola, soy " + this.nombre);
    }

    papucho() {
        console.log("papuchooooo");
    }

    despedir() {
        console.log("Chau, soy " + this.nombre);
    }

    //Variable estatica: es una variable que le pertenece a la clase y se puede acceder a ella sin necesidad de alguna instancia. 
    //Si alguna instancia la modifica, se modifica para todas. 
    static planeta = "Tierra"; 

    //Podemos hacer métods estaticos tambien: 
    static especie() {
        console.log("Soy un ser humano");
    }
}

//Creamos un objeto a partir de esta clase: 

let coky = new Persona("Coky Argento", 17); 
let paola = new Persona("Paola Argento", 18); 
let moni = new Persona("Moni Argento", 35); 
let pepe = new Persona("Pepe Argento", 40); 
console.log(coky);
console.log(paola);
console.log(moni); 
console.log(pepe);

coky.saludar();
coky.papucho();
moni.saludar();
pepe.despedir();

//Invocamos a una variable estatica de la siguiente forma: llamando a la clase primero.
console.log(Persona.planeta);


//Llamamos a un metodo estatico ahora: 
Persona.especie(); 

//Vamos a crear una clase que herede de la clase Persona: 

class Empleado extends Persona {
    constructor(nombre, edad, salario) {
        super(nombre, edad);
        this.salario = salario; 
    }

    //Podemos agregar metodos propios en la clase Empleado: 

    cobrarSalario() {
        console.log("Recibi este mes " + this.salario);
    }
}

//Creamos un empleado: 

const homero = new Empleado("Homero", 37, 100);

console.log(homero);

homero.despedir(); 
homero.cobrarSalario();
