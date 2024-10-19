import mongoose from "mongoose";
//1) Instalamos: npm install mongoose-paginate-v2
//2) Importamos: 
import mongoosePaginate from "mongoose-paginate-v2"; 

const orderSchema = new mongoose.Schema({
    nombre: String, 
    tam: String,
    precio: Number, 
    cantidad: Number
})

//3) Usamos el plugin
orderSchema.plugin(mongoosePaginate);

const OrderModel = mongoose.model("orders", orderSchema);

export default OrderModel;