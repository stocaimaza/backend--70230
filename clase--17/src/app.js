/** CLASE 17 - MONGODB AVANZADO 2 **/

//Temas: 
//1) AGGREGATIONS
//2) PAGINATION

// import mongoose from "mongoose";
// import OrderModel from "./models/order.model.js";

// const main = async () => {
//     mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/ClaseFinal?retryWrites=true&w=majority&appName=Cluster0");

    // //EJERCICIO 1: Calculamos el total de pizzas vendidas por sabor en tamaño familiar. 

    // const resultado = await OrderModel.aggregate([
    //     {
    //         $match: {
    //             tam: "familiar"
    //         }
    //     }, 
    //     {
    //         $group: {
    //             _id: "$nombre",
    //             total: {
    //                 $sum: "$cantidad"
    //             }
    //         }
    //     },
    //     //EJERCICIO 2: Ordenamos y generamos un reporte. 
    //     {
    //         $sort: {
    //             total: -1
    //             //1: ascendente
    //             //-1: descendente
    //         }
    //     }, 
    //     //Guardamos los resultados en una nueva colección llamada "reports". 
    //     {
    //         $group: {
    //             _id: 10, 
    //             orders: {
    //                 $push: "$$ROOT"
    //                 //root hace referencia al documento actual. 
    //             }
    //         }
    //     }, 
    //     //Una vez que los agrupamos, los guardamos en una coleccion: 
    //     {
    //         $project: {
    //             _id: 0,
    //             orders: "$orders"
    //             //Aca le decimos que el campo orders va a ser igual a lso resultados que guardamos en el stage anterior. 
    //         }
    //     }, 
    //     //Ultimo paso super importante es hacer el merge: 
    //     {
    //         $merge: {
    //             into: "reports"
    //         }
    //     }
    // ])

    // console.log(resultado);

    ///////////////////////////////////////////////////////////////////////////////
    //PAGINACION: 
//     const resultado = await OrderModel.paginate({}, {limit:4, page:2})

//     console.log(resultado); 

// }

// main(); 

/////////////////////////////////////////////////////////////////////////

import express from "express";
import { engine } from "express-handlebars";
import OrderModel from "./models/order.model.js";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/ClaseFinal?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
const PUERTO = 8080;

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

//Express-Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

//Rutas
app.get("/pizzas", async (req, res) => {
    let page = req.query.page || 1; 
    let limit = 2; 
    try {
        const pizzasListado = await OrderModel.paginate({}, {limit, page});

        //Recuperas el array de docs directamente: 
        const pizzasFinal = pizzasListado.docs.map(pizza => {
            const {_id, ...rest} = pizza.toObject(); 
            return rest; 
        })
        
        res.render("pizzas", {
            pizzas: pizzasFinal,
            hasPrevPage: pizzasListado.hasPrevPage,
            hasNextPage: pizzasListado.hasNextPage,
            prevPage: pizzasListado.prevPage,
            nextPage: pizzasListado.nextPage,
            currentPage: pizzasListado.page,
            totalPages: pizzasListado.totalPages
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error terrible, se suspenden las vacaciones para vos");
    }
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})