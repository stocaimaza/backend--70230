/** CLASE 9 - MOTORES DE PLANTILLA **/

//Motores de plantillas: herramientas que nos permiten generar HTML dinámico. 

//Instalamos: npm i express-handlebars

import express from "express";
const app = express(); 
const PUERTO = 8080;
import exphbs from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public"));

//Configuracion de Handlebars: 
app.engine("handlebars", exphbs.engine());  
//Le digo a express que cuando encuentre un archivo .handlebars, lo rendecire con el siguiente motor de plantillas. 
app.set("view engine", "handlebars");
app.set("views", "./src/views");
//Aca le decimos donde se encuentran los archivos .handlebars. 

//Rutas

app.use("/", viewsRouter);

app.post("/user", async(req, res) => {
    let {nombre, correo, pass} = req.body; 
    
    const objetoUsuario = {
        nombre, 
        correo, 
        pass
    }
    
     console.log(objetoUsuario);
    res.send("Datos enviados!");
})


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`); 
})