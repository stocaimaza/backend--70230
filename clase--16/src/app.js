/** CLASE 16 - MONGO AVANZADO 1 **/
//1) Teoria de la indexacion
//2) Manejo de populations en MongoDB
//3) PRE

////////////////////////////////////////////////

//INDEXACION

// import mongoose from "mongoose";
// import UserModel from "./models/user.model.js";

// const main = async () => {
//     await mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/ClaseFinal?retryWrites=true&w=majority&appName=Cluster0")

//     const respuesta = await UserModel.find({edad: {$lt: 19 }}).explain("executionStats"); 
//     console.log(respuesta);
// }

// main();

//Usamos el método explain() para ver las estadisticas de la consulta. 
//El parametro que le pasamos es "executionStats", que me permite obtener el detalle de los tiempos de consulta. 

//Si consulto por los 25000 usuarios demora esto unos 15 milisegundos. 

//EJERCICIO VAMOS A BUSCAR POR NOMBRE: (Carlos)
//nReturned: 111
//executionTimeMillis: 35 

//Aplicando el indice en nombre: 
//nReturned: 111
//executionTimeMillis: 1

//EJERCICIO POR EDAD (buscamos a los menores de 19 años):
//nReturned: 384
//executionTimeMillis: 32

//Aplicando el indice en edad:
//nReturned: 384
//executionTimeMillis: 1

////////////////////////////////////////////////////////////////////////////

import mongoose from "mongoose";
import AlumnoModel from "./models/alumno.model.js";
import CursoModel from "./models/curso.model.js";

const main = async () => {
    await mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/ClaseFinal?retryWrites=true&w=majority&appName=Cluster0")

    //Voy a buscar un alumno a cual agregarle los cursos: 
    //const estudianteJuan = await AlumnoModel.findById("6713d6893acf3447c0f6b8b5"); 

    //Busco un curso para sumarselo al alumno:
    //const cursoBackend = await CursoModel.findById("6713d69a3acf3447c0f6b8bc"); 
    //console.log(estudianteJuan);
    //console.log(cursoBackend);

    //Ahora tengo que ingresar el curso de backend al array "cursos" del estudiante Juan:
    //estudianteJuan.cursos.push(cursoBackend);
    
    //Actualizamos la base de datos: 
    //await AlumnoModel.findByIdAndUpdate("6713d6893acf3447c0f6b8b5", estudianteJuan);

    //AHORA VAMOS A CONSULTAR LA COLECCION ALUMNOS: 
    const resultado = await AlumnoModel.findById("6713d6893acf3447c0f6b8b5")
    ////////*.populate("cursos"); */
    
    console.log(resultado); 

}

main(); 

