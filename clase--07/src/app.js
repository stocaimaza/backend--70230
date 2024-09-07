/** CLASE 7 - EXPRESS AVANZADO **/

//Temas: 

//1) Codigos de estado
//2) ¿Que es una API?
//3) API Rest
//4) Metodos de Peticion
//5) Postman
//6) Practicar: GET - POST - PUT - DELETE 

//ABM: ALTA BAJA MODIFICACION 
//CRUD: CREATE READ UPDATE DELETE

//1) Codigos de estado: cada vez que hacemos una peticion al servidor este no solo me contesta con informacion, tambien me puede enviar un codigo de estado. 

//Los codigos de estado son numeritos de 3 cifras que nos indican el resultado de la peticion. 

//1xx: informativas
//2xx: exitosas
//3xx: redirecciones
//4xx: errores del cliente
//5xx: errores del servidor

//Las mas utilizadas: 

//200: ok, la peticion ha tenido exito. 
//400: bad request. La solicitud no puede ser entendida por el servidor, generalmente por sintaxis incorrecta. 
//401: No te podes autenticar. Acceso no autorizado al recurso solicitado. 
//403: El servidor no puede responder a la solicitud porque las credenciales no tienen autorizacion para acceder al contenido. 
//404: Not found. Recurso no encontrado. 
//500: Internal Server Error: error interno del servidor. 

//2) ¿Que es una API?
//API es el acronimo de Application Programming Interface, o Interfaz de programacion de aplicaciones. 
//Es un conjunto de reglas y definiciones que establecen como trabajaran en conjunto el front con el back. 


//Iniciamos un servidor: 
//Con common js: 
//const express = require("express"); 

//Con ES Modules: 
import express from "express";
const app = express();
const PUERTO = 8080; 

//Dos herramientas adicionales que me permiten trabajar con formato JSON y con multiples consultas de parte del front / cliente. 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

//Rutas

const clientes = [
    {id: "1", nombre: "Tinki Winki", apellido: "Teletubbie"},
    {id: "2", nombre: "Dipsi", apellido: "Teletubbie"},
    {id: "3", nombre: "Lala", apellido: "Teletubbie"},
    {id: "4", nombre: "Po", apellido: "Teletubbie"},
    {id: "5", nombre: "Sol", apellido: "Teletubbie"}
]

//Esta ruta retorna todos los clientes: 

app.get("/clientes", (req, res) => {
    res.send(clientes);
})

//Esta ruta me retorna 1 solo por id: 

app.get("/clientes/:id", (req, res) => {
    let {id} = req.params;

    const clienteBuscado = clientes.find(cliente => cliente.id === id); 

    if (clienteBuscado) {
        res.send(clienteBuscado);
    } else {
        res.send("No se encuentra cliente con ese ID");
    }
})

//Ruta post para generar un nuevo cliente: 

app.post("/clientes", (req, res) => {
    const nuevoCliente = req.body; 

    clientes.push(nuevoCliente);
    console.log(clientes);
    res.status(201).send("Cliente creado!");
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
} )

//La ruta PUT /:id deberá tomar un cliente y actualizarlo por los campos enviados desde el body. Nunca se debe actualizar o eliminar un ID. 

app.put("/clientes/:id", (req, res) => {
    //tengo que recuperar el id del cliente que viene de params
    //tengo que recuperar el nombre y apellido actualizados que viene del body
    let {id} = req.params;
    let {nombre, apellido} = req.body; 

    //Vamos a buscar el indice de un cliente determinado: 
    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 
    //indiceCliente solo guarda el indice del cliente buscado (ejemplo: 0, 4, 3); 

    if(indiceCliente !== -1) {
        //Esto quiere decir que el cliente existe y que lo encontre!
        clientes[indiceCliente].nombre = nombre;
        clientes[indiceCliente].apellido = apellido; 

        console.log(clientes);
        res.send("Cliente actualizado")
    } else {
        //Si no lo encuentro, avisemos por mensaje
        res.status(404).send("Cliente no encontrado"); 
    }
    
})

//La ruta DELETE /:id deberá eliminar el cliente que pasemos por params

app.delete("/clientes/:id", (req, res) => {
    let {id} = req.params; 

    //Vamos a buscar el indice de un cliente determinado: 
    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 
    //indiceCliente solo guarda el indice del cliente buscado (ejemplo: 0, 4, 3); 

    if(indiceCliente !== -1) {
        //Esto quiere decir que el cliente existe y que lo encontre!
        //Si lo encuentro, lo elimino!
        clientes.splice(indiceCliente, 1);

        console.log(clientes);
        res.send("Cliente Eliminado")
    } else {
        //Si no lo encuentro, avisemos por mensaje
        res.status(404).send("Cliente no encontrado"); 
    }

})