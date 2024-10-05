import { Router } from "express";
const router = Router();
//Importamos el model: 
import ClientesModel from "../models/clientes.model.js";


//1) Obtenemos todos los clientes de nuestra Base de Datos: 

router.get("/", async (req, res) => {
    try {
        const clientes = await ClientesModel.find();
        res.send(clientes);
    } catch (error) {
        res.status(500).send("Error del servidor al buscar los clientes");
    }
})

//2) Busco un cliente por su id: 

router.get("/:id", async (req, res) => {
    let {id} = req.params;
    try {
        const clienteBuscado = await ClientesModel.findById(id); 
        if (clienteBuscado) {
            return res.send(clienteBuscado); 
        } else {
            return res.send("No se encuentra a nadie con ese ID");
        }
    } catch (error) {
        res.status(500).send("Error interno del servidor"); 
    }
})

//3) Voy a subir un Cliente a la Base de Datos en la Nube: 

router.post("/", async (req, res) => {
    try {
        const cliente = new ClientesModel(req.body); //Aca voy a crear un nuevo "Cliente". 
        await cliente.save(); 
        // Lo voy a guardar en la base de datos. 

        res.send({message: "Cliente cargado exitosamente", cliente}); 
    } catch (error) {
        res.status(500).send("Error interno del servidor"); 
    }
})

//4) Voy a actualizar un cliente por su ID: 

router.put("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndUpdate(req.params.id, req.body); 
        //Agregar una validacion por si ese id no pertenece a nadie. 
        res.status(200).send({message: "Todo bien, ya lo actualizamos", cliente});
    } catch (error) {
        res.status(500).send("Error interno del servidor"); 
    }
})

//5) Eliminamos un cliente por su ID: 

router.delete("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndDelete(req.params.id); 
        if(!cliente) {
            return res.status(404).send("Cliente no encontrado"); 
        }

        res.status(200).send({message: "Cliente borrado"});
    } catch (error) {
        res.status(500).send("Error interno del servidor: ", error); 
    }
})




export default router; 