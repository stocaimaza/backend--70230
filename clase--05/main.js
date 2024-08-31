/** CLASE 5 - MANEJO DE ARCHIVOS  **/

//Temas: 

//1) File System
//2) Manejo de archivos de forma sincrónica 
//3) Manejo de archivos con callbacks
//4) Manejo de archivos con promesas
//5) Manejo de datos complejos
//6) Presentamos una actividad

//File System: es un manejador de archivos que viene ya incorporado con Node JS. 
//Me permite realizar operaciones de Escritura, Lectura, Actualizacion y borrado de archivos. ( CRUD )

//1) Primer paso: 

const fs = require("fs"); 

//console.log(typeof fs);

//a) TRABAJAMOS DE FORMA SINCRONICA: 

// const ruta = "./ejemplo-sin.txt";

// //Crear un archivo: 

// fs.writeFileSync("./ejemplo-sin.txt", "Hola, estamos trabajando en un ejemplo sincronico"); 
// //Primer parametro el path, el segundo la data que almacenas. 

// //Leer un archivo: 

// let contenido = fs.readFileSync(ruta, "utf-8"); 
// console.log(contenido);

// //Podemos verificar si el archivo existe antes de leerlo: 

// if (fs.existsSync("./firulais.txt")) {
//     let respuesta = fs.readFileSync("./firulais.txt", "utf-8");
//     console.log(respuesta); 
// } else {
//     console.log("No existe el archivo, vamos a morir!"); 
// }

// //Actualizar contenidos: 

// //Pisando toda la información: 
// fs.writeFileSync(ruta, "Hola, actualizamos la informacion"); 

// //Agregando mas informacion al final: 

// fs.appendFileSync(ruta, " este es un texto agregado"); 

// //Eliminar archivo: 

// fs.unlinkSync(ruta);
//fs.unlinkSync("./firulais.txt");

//B) TRABAJANDO CON CALLBACKS: 

// const rutaCallback = "./ejemplo-call.txt"; 

// fs.writeFile(rutaCallback, "Nuevo archivo, ahora con callbacks", (error) => {
//     if ( error ) return console.log("No pudimos crear el archivo"); 

//     //Leemos el archivo: 
//     fs.readFile(rutaCallback, "utf-8", (error, contenido) => {
//         //Acá el callback tiene 2 parametros, uno el error, y el segundo el contenido. 
//         if ( error ) return console.log("No podemos leer el archivo")
//         console.log(contenido); 

//         //Y si queremos agregar mas info: 

//         fs.appendFile(rutaCallback, " y ahora comenzo a llover ", (error) => {
//             if ( error ) return console.log("No pudimos agregar contenido adicional"); 

//             // Y si lo quiero eliminar: 

//             fs.unlink(rutaCallback, (error) => {    
//                 if(error) return console.log("No se puede eliminar el archivo"); 
//             })
//         })
//     })
// })


//C) TRABAJAMOS CON PROMESAS: 

const rutaPromesas = "./text-pro.txt";

const operacionesAsincronicas = async () => {
    //Crear un archivo: 
    await fs.promises.writeFile(rutaPromesas, "Nuevo archivo ahora con promesas!!");

    //Leer un archivo: 
    let respuesta = await fs.promises.readFile(rutaPromesas, "utf-8");
    console.log(respuesta);

    //Agregar contenido adicional: 
    await fs.promises.appendFile(rutaPromesas, " agregamos este texto al final"); 

    //Releer: 
    respuesta = await fs.promises.readFile(rutaPromesas, "utf-8");
    console.log(respuesta);

    //Lo eliminamos: 
    await fs.promises.unlink(rutaPromesas);
}

//No se olviden de invocar a la funcion!
operacionesAsincronicas(); 

//Funciones de ejemplo: 

const leerArchivo = async (ruta) => {
    let resultado = await fs.promises.readFile(ruta, "utf-8");
    return resultado; 
}

const guardarArchivo = async (ruta, data) => {
    await fs.promises.writeFile(ruta, data); 
}

//MANEJO DE DATOS COMPLEJOS: 

const familiaArgento = [
    {nombre: "Pepe", apellido: "Argento", edad: 50},
    {nombre: "Moni", apellido: "Argento", edad: 38},
    {nombre: "Paola", apellido: "Argento", edad: 18},
    {nombre: "Coky", apellido: "Argento", edad: 17},
    {nombre: "Fatiga", apellido: "Argento", edad: 7}
]

const archivoArgento = "./archivo-argento.json"; 

const guardarArgentos = async () => {
    await fs.promises.writeFile(archivoArgento, JSON.stringify(familiaArgento, null, 2));
}

guardarArgentos(); 


//Recuperamos los datos del JSON: 

const leemosArgentos = async () => {
    const resultado = await fs.promises.readFile(archivoArgento, "utf-8");
    const arrayFinalFamilia = JSON.parse(resultado);
    console.log(arrayFinalFamilia); 
}

leemosArgentos(); 