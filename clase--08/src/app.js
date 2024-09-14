/** EJERCICIO INICIAL: MASCOTAS Y USUARIOS  **/

import express from "express";
const app = express(); 
const PUERTO = 8080; 
//Tengo que importar los router: 
import mascotasRouter from "./routes/mascotas.router.js"; 
import usuariosRouter from "./routes/usuarios.router.js";


//Middleware: 
app.use(express.json());
//Acá le digo a express que voy a recibir datos en formato JSON. 

app.use(express.urlencoded({extended: true})); 
//Vamos a recibir datos complejos. 

//Rutas: 
app.use("/", mascotasRouter);
app.use("/", usuariosRouter);



app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//SERVICIO DE ARCHIVOS ESTÁTICOS: 
//Express nos permite tener archivos estaticos, como imagenes, css, html, etc. 
//Estos recursos estan visibles para el usuario de forma directa. 
//Los vamos a almacenar en la carpeta "PUBLIC".

//¿Como lo configuramos? 
//app.use(express.static("./src/public")); 

//Prefijo Virtual: 
//Si queremos que la carpeta public se llame de otra forma, podemos configurarlo de la siguiente manera: 

app.use("/firulais", express.static("./src/public"));

//Ventajas de usar un Prefijo Virtual: 
// - Me permite organizarme mejor con las rutas. 
// - Me da una capa extra de seguridad. 

//Middleware de Terceros: 
//MULTER: me permite cargar archivos al servidor. 

//1) Instalamos: npm i multer
//2) Importamos el módulo: 

import multer from "multer";

//3) Creamos una constante que se llama upload para almacenar la configuracion: 

//4) Configuramos un storage: esto es un objeto que tiene dos propiedades: destination y filename. Configuramos como y donde se van a guardar los nuevos archivos. 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img");
        //Carpeta donde se guardan las imagenes. 
    } , 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //Mantengo el nombre original. 
    }
    
})

//const upload = multer({dest: "./src/public/img"}); 

const upload = multer({storage: storage}); 

app.post("/imagenes", upload.array("imagen") ,(req, res) => {
    res.send("Imagen cargada al servidor!"); 
})


