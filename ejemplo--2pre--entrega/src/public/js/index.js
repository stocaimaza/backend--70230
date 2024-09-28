const socket = io();

socket.on("productos", (data) => {
    //console.log(data)
    //Aca en lugar de mostrar por consola, vamos a llamar a una función qeu se encargue de renderizar los productos. 
    renderProductos(data);
})

const renderProductos = (productos) => {
    const contenedorProductos = document.getElementById("contenedorProductos");

    //Recorremos el array y creamos una card por cada producto. 
    productos.forEach(item => {
        const card = document.createElement("div");

        card.innerHTML =
            `
            <p> ${item.id} </p>
            <p> ${item.title} </p>
            <p> ${item.price} </p>
            <button> Eliminar </button>
        `

        contenedorProductos.appendChild(card);

    })
}