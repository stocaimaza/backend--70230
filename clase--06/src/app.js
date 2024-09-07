/** CLASE 6 - SERVIDORES WEB **/

//Temas de hoy: 

//1) ¿Que es un servidor?
//2) Protocolo HTTP
//3) Modulo Nativo HTTP
//4) Express JS
//5) Objeto Request
//6) Tarea para el hogar

//Servidor: software o hardware que almacena y admnistra recursos. Estos recursos pueden ser imagenes, archivos, sitios web, videos, datos, juegos. Su función es responder a las peticiones de los clientes. Es importante aclarar que un servidor puede responder a multiples clientes al mismo tiempo. A esta relación se la conoce como modelo cliente-servidor. 

//cliente = request (req)
//servidor = response (res)

//2) HTTP: Significa "Protocolo de Transferencia de Hipertexto". Es un protocolo de comunicación, es decir un conjunto de reglas que definen como se conectan y trabajan dos dispositivos. 

//3) Modulo Nativo HTTP: es un modulo que viene por defecto en Node JS. Nos permite crear un servidor web y enviar informacion a traves del protocolo HTTP. 

//Primer paso:  vamos a importar el modulo http

//const http = require("http"); 

//Segundo paso: vamos a crear el servidor web. Para esto vamos a usar el método createServer() del módulo http. Este método recibe como parámetro una función callback que va a ser ejecutada cada vez que se realice una peticion al servidor. Esta función tiene dos parametros que: request y response. 


// const server = http.createServer((request, response) => {
//     //Cuerpo de la función. Esto se ejecuta en cada peticion. 
//     response.end("Ahora estoy usando el node --watch"); 
// })


//Tercer paso: vamos a poner a escuchar nuestro servidor en un puerto de la computadora. Para eso vamos a usar el método listen() del servidor. Este método recibe como parametro el puerto en el cual queremos ejecutar el proceso y adicional podemos colocar una funcion callback. 

//const PUERTO = 8080;

// server.listen(PUERTO, () => {
//     //console.log(`Estamos escuchando en el puerto ${PUERTO}`);
//     console.log(`Escuchando en el http://localhost:${PUERTO}`);
// })

///////////////////////////////////////////////

//4) Express JS: es un framework minimalista de Node JS que nos permite crear servidores web de una forma mucho más sencilla. 

//1 Pasito: Instalamos: npm i express 

//2 Paso: 

const express = require("express"); 

//3 paso: 

const app = express();

//4 paso: crear una ruta

app.get("/saludo", (req, res) => {
    res.send("Mi primer servidor con express, que felicidad");
})

//5 paso: ponemos a escuchar el servidor con listen.

app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080 ahora con express`); 
})

//Los metodos HTTP o verbos son los que nos permiten indicarle al servidor que tipo de accion queremos realizar. 

//Los mas usados: 

//GET: me permite solicitar datos al servidor. 
//POST: se usa para enviar datos al servidor. 
//PUT: me sirve para actualizar datos del servidor. 
//DELETE: se utiliza para eliminar datos del servidor. 

const misProductos = [
    {id: 1, nombre: "Fideos", precio: 150},
    {id: 2, nombre: "Arroz", precio: 250},
    {id: 3, nombre: "Aceite", precio: 350},
    {id: 4, nombre: "Harina", precio: 450},
    {id: 5, nombre: "Pan", precio: 550},
    {id: 6, nombre: "Leche", precio: 650}
]

app.get("/productos", (req, res) => {
    //res.send("Esta es la sección PRODUCTOS"); 
    res.json(misProductos);
})

app.get("/contactos", (req, res) => {
    res.send("Esta es la sección CONTACTOS");
})

//Pagina de inicio - home: 

app.get("/", (req, res) => {
    res.send("Home de la App");
})

//req.params = request es un objeto que contiene los parametros de la ruta. 
//params = es una propiedad que almacena una variable dinamica que se me pueden enviar por la ruta. 

//Vamos a crear una ruta que me retorna un producto particular por su id: 

app.get("/productos/:id", (req, res) => {
    //Tenemos que crear un parametro dinamico (ejemplo :id :cliente :usuario)
    let idProducto = parseInt(req.params.id);
    //const {id} = req.params;
    //Todo dato que yo recupero de los params, es un string. 

    let producto = misProductos.find(producto => producto.id === idProducto);

    if (producto) {
        res.send(producto); 
    } else {
        res.send("Producto no encontrado, vamos a morir");
    }
})

//req.query: query se refiere a las multiples consultas que se pueden hacer a un determinado endpoint. Simplemente le tenemos que colocar el simbolo de interrogacion (?) y luego el nombre de la consulta. 

app.get("/clientes", (req, res) => {
    // let nombre = req.query.nombre; 
    // let apellido = req.query.apellido; 

    let {nombre, apellido} = req.query; 

    res.send(`Bienvenido ${nombre} - ${apellido}`); 
})