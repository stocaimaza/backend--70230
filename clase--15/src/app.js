//Actividad: Generar un Pinterest ( Coderest ) almacenando los datos en mongoBD. 

//////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import { engine } from "express-handlebars";
import multer from "multer";
import viewRouter from "./routes/views.router.js"; 
import imagenRouter from "./routes/imagen.router.js";
import "./database.js";
const app = express();
const PUERTO = 8080; 

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("./src/public")); 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img"); 
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
app.use(multer({storage}).single("image")); 

//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas 
app.use("/", imagenRouter); 
app.use("/", viewRouter); 

app.listen(PUERTO, () => console.log(`Escuchando en el ${PUERTO}`));