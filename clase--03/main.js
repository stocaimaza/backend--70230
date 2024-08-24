/** CLASE 3 - PROGRAMACION SINCRONICA VS ASINCRONICA  **/
//Temas de hoy: 
//1) Enfoque sincrónico vs asincronico
//2) Callback
//3) Promesas
//4) Async Await

/////////////////////////////////////////////////////

//1) Sincronismo vs Asincronismo 

//Programacion Sincronica: es un enfoque o estilo de programacon en que las tareas se ejecutan secuencialmente en el orden en que se escriben. 

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Cada tarea se ejecuta en orden, y bloquea la ejecucion de la siguiente hasta que se complete. 

//Ejemplo: 

function a() {
    console.log("1");
    b();
}

function b() {
    console.log("2");
    c();
}

function c() {
    console.log("3");
}

a();

//Programacion Asincronica: 
//Es un enfoque o estilo de programacion en que las tareas se ejecutan en segundo plano y no bloquean a las siguientes. 

//Ejemplos: 

//Para poder simular una peticion a una API, vamos a usar metodos de Javascript llamados Timers. El mas conocido es el setTimeOut 

setTimeout(mostrarMensaje, 4000)

function mostrarMensaje() {
    console.log("Primer tarea");
}

console.log("Segunda tarea");

//2) Callback: 
//¿Que es una función callback? Esta es una funcion que pasamos como argumento a otra funcion. 

//¡Ojo!A no confundir con una FOS. Funcion de Orden Superior. 

//Ejemplo: 

function suma(numA, numB, callback) {
    let resultado = numA + numB;
    callback(resultado);
}

function mostrarResultado(firulais) {
    console.log("El resultado de la operacion es el siguiente:  " + firulais);
}

suma(10, 5, mostrarResultado);


//Ejemplo con el metodo map: 

let array = [1, 2, 3, 4, 5];

let numerosDuplicados = array.map(numero => numero * 2);
console.log(numerosDuplicados);

//¿Como podemos hacer nosotros nuestra funcion map made in casa? 

function mapear(arrayOriginal, callback) {
    let nuevoArray = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        nuevoArray.push(callback(arrayOriginal[i]))
    }

    return nuevoArray;
}

function duplicar(numero) {
    return numero * 2;
}

console.log("Nueva funcion map: " + mapear(array, duplicar));

//3) Promesas: 
//Las promesas son objetos que representan un hecho eventual a futuro. Las vamos a utilizar en operaciones asincronicas que pueden resultar exitosas o fallidas. 

//Las promesas tienen 3 estados: 
//Pendiente: (pending) Estado inicial de la promesa. La operacion todavia no se completa ni se rechaza. 
//Exitosa: (fulfilled) La operacion se completo correctamente y se resuelve la promesa. Esto generalmente implica que pude recibir algun valor o resultado. 
//Fallida: (rejected) La operacion asincronica fallo y se rechazo la promesa. Esto puede suceder si se produjo algun error durante la operacion. 

//Creacion de una promesa: 

//Para crear una promesa, debemos instanciar la clase Promise y pasarle como argumento un callback. Este callback tiene dos parametros: resolve y reject. 
const promesa = new Promise((resolve, reject) => {
    //Aca va el codigo que queremos ejecutar. 

    if (true) {
        resolve("Exito en la promesa");
    } else {
        reject("Error en la promesa, nunca me llego la camiseta");
    }

})

console.log(promesa);



//Métodos Then y Catch: 

//Estos metodos nos permiten manejar el resultado de la promesa. Se usan concatenados. 

//THEN: lo ejecutamos cuando la promesa se resuelve exitosamente. 
//CATCH: lo ejecutamos cuando la promesa se rechace. 
//FINALLY: se ejecuta siempre, se rechace o se cumpla la promesa. 


promesa
    .then(() => console.log("Siii, me llego la camiseta de Messi firmada"))
    .catch(() => console.log("No me llego la camiseta, tengo un par de medias nuevos"))
    .finally(() => console.log("Proceso terminado!"))


//Lo podemos practicar con un array de datos:

const productos = [
    { id: 1, nombre: "Mesa", precio: 5000 },
    { id: 2, nombre: "Silla", precio: 2000 },
    { id: 3, nombre: "Sillon", precio: 6000 }
]


function buscarProductoPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(producto => producto.id === id);

            if (producto) {
                resolve(producto);
            } else {
                reject("No existe producto con ese ID");
            }
        }, 2000)
    })
}

buscarProductoPorId(2000)
    .then((producto) => console.log(producto))
    .catch((error) => console.log(error))


//4) Async Await 
//Son dos palabras reservadas que nos permiten trabajar con promesas de una forma mas simple. 

async function buscarProductoPorIdAsync(id) {
    const producto = await buscarProductoPorId(id);
    console.log(producto);
}

buscarProductoPorIdAsync(1);

//Con la palabra await genero una pausa en la ejecucion del codigo hasta que la promesa se resuelva o se rechace. 
//Para poder usar await, la funcion donde la use tiene que tener el prefijo async. 

//Consultamos a una API: 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then( respuesta => respuesta.json())
//     //Lo paso por el metodo json para obtener los datos. 
//     .then( usuarios => console.log(usuarios))


//¿Como lo puedo hacer con async await? 
//Generalmente cuando trabajamos con async await englobamos todo en un bloque try-cath

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const usuarios = await respuesta.json();
        console.log(usuarios);
    } catch (error) {
        console.log(error);
    }
}

obtenerUsuarios();

