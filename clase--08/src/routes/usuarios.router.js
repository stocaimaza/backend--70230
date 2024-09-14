import { Router } from "express";
const router = Router(); 

//Array para almacenar usuarios
const usuarios = [];

//Rutas: 

router.get("/api/usuarios", (req, res) => {
    res.json(usuarios);
})

router.post("/api/usuarios", (req, res) => {
    const nuevoUsuario = req.body; 

    usuarios.push(nuevoUsuario); 
    res.send("Usuario agregado"); 
})


export default router; 