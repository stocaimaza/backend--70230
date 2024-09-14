import { Router } from "express";
const router = Router(); 

//Armamos un pequeño array de productos: 

const arrayProductos = [
    {nombre: "Fideos", descripcion: "Los mas ricos", precio: 100},
    {nombre: "Arroz", descripcion: "El que no se pasa", precio: 150},
    {nombre: "Helado", descripcion: "Mas frio que el corazon de tu ex", precio: 80}
]

//Ruta
router.get("/", (req, res) => {
    const usuario = {
        nombre: "Tinki",
        apellido: "Winki",
        mayorEdad: true

    }
    res.render("index", {usuario, arrayProductos});
})

router.get("/contacto", (req, res) =>  {
    res.render("contacto")
})

router.get("/preguntas", (req, res) => {
    res.render("preguntas");
})

router.get("/register", (req, res) => {
    res.render("register");
})



export default router; 