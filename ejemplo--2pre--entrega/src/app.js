//Desarrollar un servidor express que, en su archivo app.js importe al archivo de productManager.

const express = require("express"); 
const exphbs = require("express-handlebars"); 
const socket = require("socket.io"); 
const productRouter = require("./routes/products.router.js");
//const cartRouter = require("./routes/carts.router.js");
const viewsRouter = require("./routes/views.router.js"); 
const app = express(); 
const PUERTO = 8080;

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON. 
app.use(express.static("./src/public")); 

//Configuramos Express-Handlebars
app.engine("handlebars", exphbs.engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas
app.use("/api/products", productRouter);
//app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);


const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})

//Creamos el server de socket.io: 
const io = socket(httpServer); 

//Debo obtener el array con productos. ¿De donde lo saco? 
const ProductManager = require("./managers/product-manager.js"); 
const manager = new ProductManager("./src/data/productos.json"); 

io.on("connection", async (socket) => {
    console.log("Un cliente se conectó"); 

    //Aca le puedo enviar el array de productos: 
    socket.emit("productos", await manager.getProducts()); 

})