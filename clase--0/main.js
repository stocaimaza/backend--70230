/** TIPOS DE DATOS EN JS **/

//Dividimos los datos en dos grupos: 
//1) Tipo primitivo
//2) Tipo objeto

//1.1 Tipo number: 

789456
789.415
//Datos numericos que pueden ser enteros o decimales. A los decimales los llamamos "punto flotante". Este tipo de dato esta destinado a operaciones matematicas. 

//1.2 Tipo String: 

// "Esto es un string"
// 'Esto es otro string'
// `Tambien asi`
//backsticks alt + 92  =  ``

//Los strings son cadenas de texto. Se pueden escribir con comillas dobles o simples. 

//1.3 Tipo boolean

true
false

//Son valores que pueden ser verdaderos o falsos. Los usamos generalmente para tomar decisiones junto a bucles y condicionales. 

//1.4 Tipo undefined: 

undefined

//Tipo de dato "indefinido"-.
//Es un valor que se le asigna a una variable cuando no se le ha dado otro valor. 


//1.5 Tipo Null 

null

//Es un valor que asignamos cuando no queremos que la variable tenga ningun valor. Es la ausencia intencional de un valor. 

//VARIABLES: 

//Una variables es un espacio de memoria que almacena informacion importante para la aplicacion, y como su nombre lo indica puede modificarse en el tiempo.


//Declaramos una variable: 

let alumno;

//¿Que tipo de dato me retorna alumno? 

console.log(typeof alumno);

//Asignamos un valor: 

alumno = "Tinki Winki"; 

console.log(typeof alumno);

//Tambien podemos inicializar variables, que significa que asignamos  un valor al momento de declararla: 

let profesor = "Dypsi"; 

//Las constantes son variables que no pueden cambiar su valor. Se declaran con la palabra "const" y una vez que se asigna un valor, no se le puede asignar otro. 

const nacimiento = 1987; 

//nacimiento = 1995;
console.log(nacimiento);

//2) TIPO OBJETO: 

//ARRAY: es una colección de datos. Los datos que almacena pueden ser de cualquier tipo. 

let array = [1, "hola", true, null, undefined, [1, 2, 3]]; 

console.log(array);

//Cada elemento del array se puede acceder a traves de un indice. 
//El indice es un numero entero que representa la posicion. 
//Los arrays en JS son dinámicos, es decir, que pueden cambiar de tamaño. 

console.log(array.length);
//gth = "Gatitos tienen hambre"

//2.2 Objetos: 

let perro = {
    nombre: "Firulais",
    edad: 5, 
    vacunado: true, 
    raza: "ladrador"
}

console.log(perro);

//Puedo mostrar y modificar propiedades de los objetos: 

console.log(perro.nombre); 
console.log(perro["edad"]);

perro.nombre = "Rex";

console.log(perro);

