import { Router } from "express";
const router = Router(); 
//Importamos el ImagenModel: 
import ImagenModel from "../models/imagen.model.js";
//Importamos File System: 
import fs from "fs"; 

router.post("/upload", async (req, res) => {
    try {
        const imagen = new ImagenModel(); 
        imagen.title = req.body.title; 
        imagen.description = req.body.description; 
        imagen.filename = req.file.filename; 
        imagen.path = "/img/" + req.file.filename; 

        //Tenemos que guardar este objeto en la Base de datos: 
        
        await imagen.save(); 
        res.redirect("/");
    } catch (error) {
        res.status(500).send({message: "Error en el server, vamos a morir ahhhhhh"});
    }
})

//Creamos una ruta para eliminar: 

router.get("/image/:id/delete", async (req, res) => {
    let {id} = req.params; 
    //1) Tengo que borrar el documento de MongoDB. 
    const imagen = await ImagenModel.findByIdAndDelete(id);
    //2) Tengo que borrar la imagen. 
    await fs.promises.unlink("./src/public" + imagen.path); 
    res.redirect("/"); 
})

export default router; 