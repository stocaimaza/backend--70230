//1) Desafio No entregable de Backend. 

class ProductManager {
    static ultimoId = 0; 
    constructor(){
        //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock){
        //Validamos que todos los campos sean obligatorios
        if( !title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios!"); 
            return; 
        }

        //Validamos que el codigo sea unico: 
        if(this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico, o todos moriremos!!"); 
            return; 
        }

        //Creamos el nuevo producto: 

        const nuevoProducto = {
            id: ++ProductManager.ultimoId, 
            title,
            description,
            price, 
            img, 
            code, 
            stock
        }

        //Lo guardamos en el array: 
        this.products.push(nuevoProducto);

    }

    getProducts(){
        return this.products; 
    }

    getProductById(id){
        const productoBuscado = this.products.find(item => item.id === id);

        if(!productoBuscado) {
            console.log("Not found!, maldita rata de dos patas!"); 
        } else {
            console.log("Lo encontramos!!");
            console.log(productoBuscado); 
        }
    }
}

//Testing: 

//1) Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager(); 

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(manager.getProducts()); 

//3) Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123", 25); 

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

console.log(manager.getProducts()); 

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

manager.addProduct("Fideos", "Marolio", 5000, "sin imagen", "abc124", 25); 
manager.addProduct("Arroz", "Marolio", 8000, "sin imagen", "abc125", 25); 

console.log(manager.getProducts()); 

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo


manager.getProductById(1000);