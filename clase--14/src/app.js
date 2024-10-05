/** CLASE 14 - MONGOOSE **/

//Temas de hoy: 

//1) Clientes de base de datos. 
//2) MongoDB Atlas
//3) DBaas (Database as a service)
//4) Configuración e instalación de Mongoose
//5) CRUD en nuestra app. 

///////////////////////////////////////////////////

import express from "express";
import clientesRouter from "./routes/clientes.router.js"; 
import mongoose from "mongoose";
const app = express(); 
const PUERTO = 8080; 

//Me conecto a la Base de datos de MongoDB Atlas: 
mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/Supermercado?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))
    .catch((error) => console.log("Tenemos un error: ", error))


//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

//Rutas
app.use("/clientes", clientesRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})