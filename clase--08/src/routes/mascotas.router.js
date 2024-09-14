import { Router } from "express";
const router = Router(); 

//Array para almacenar mascotas
const mascotas = [];

//Rutas: 

router.get("/api/mascotas", (req, res) => {
    res.json(mascotas);
})

router.post("/api/mascotas", (req, res) => {
    const nuevaMascota = req.body; 

    mascotas.push(nuevaMascota);
    res.send("Mascota agregada");
})


export default router; 