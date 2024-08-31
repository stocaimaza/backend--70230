const temprano = () => {
    console.log("Buenos dias!"); 
}

const tarde = () => {
    console.log("Buenas tardes!"); 
}

const noche = () => {
    console.log("Buenas noches!"); 
}

//Con Common JS: 
// module.exports = {
//     temprano,
//     tarde,
//     noche
// }

//Con ES Modules: 

export {temprano, tarde, noche};