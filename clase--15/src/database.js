import mongoose from "mongoose";

mongoose.connect("mongodb+srv://coderhouse70230:coderhouse@cluster0.8hzd7.mongodb.net/Coderest?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Conectado a MongoDB")
    })
    .catch((error) => {
        console.log("Tenemos un error: ", error)
    })