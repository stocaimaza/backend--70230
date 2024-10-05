import { Router } from "express";
const router = Router(); 
import ImagenModel from "../models/imagen.model.js";

router.get("/", async (req, res) => {
    const imagenes = await ImagenModel.find()

    const nuevoArray = imagenes.map( imagen => {
        return {
            id: imagen._id,
            title: imagen.title, 
            description: imagen.description, 
            filename: imagen.filename, 
            path: imagen.path
        }
    })
    res.render("index", {imagenes: nuevoArray}); 
})

//Ruta para acceder al formulario de carga: 

router.get("/upload", (req, res) => {
    res.render("upload");
})

export default router; 