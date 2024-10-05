//1) Importar mongoose: 
import mongoose from "mongoose";

//2) Vamos a crear el Schema. 
//El "Schema" es un objeto que me permite definir la forma de los documentos. Configuramos el nombre de los campos y los tipos de datos que almacenarán. 

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
})

//Definomos el modelo: 
const ClientesModel = mongoose.model("clientes", clienteSchema);
//Le pasamos el nombre de la colección como primer parametro y el segundo el schema donde se configura el documento. 

//No se olviden de exportar el ClientesModel!

export default ClientesModel;