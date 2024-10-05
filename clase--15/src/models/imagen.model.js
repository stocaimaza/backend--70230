import mongoose from "mongoose";

const nombreCollection = "imagenes"; 

const imagenSchema = new mongoose.Schema({
    title: String, 
    String,
    filename: String, 
    path: String
})

const ImagenModel = mongoose.model(nombreCollection, imagenSchema); 

export default ImagenModel; 

