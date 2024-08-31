/** CLASE 4 - NPM Y NODE JS **/

//Temas de hoy: 

// - Node JS
// - Iniciamos un proyecto con NPM 
// - Modulos
// - Instalaciones globales y locales 
// - Versionado de dependencias
// - Politicas para actualizar dependencias. 

//¿Que es un módulo? 

//Es un archivo de JS que contiene un conjunto de funciones que nos permiten resolver una tarea en particular. 

//Podemos trabajar en Backend de 3 formas con módulos: 

//1) Modulos escritos por nosotros mismos. 

//Importar con Common JS: 

// const saludos = require("./saludos.js");

// saludos.temprano(); 
// saludos.tarde();
// saludos.noche(); 

//Importar con ES Modules: 

import { temprano, tarde, noche } from "./saludos.js";

temprano(); 
tarde(); 
noche(); 

//Recuerden que si trabajan con ES Modules tiene que colocar el "type":"module" en el package.json


//Modulos Nativos de Node JS

//Estos son módulos que viene por defecto con Node JS. Y ya contiene un conjunto de funciones que nos permiten resolver una tarea en particular. 

//Algunos de los conocidos: 

//fs: para trabajar con el sistema de archivos. 
//http: para crear un servidor web. 
//path: para trabajar con las rutas de los archivos. 
//crypto: para trabajar con encriptacion de datos. 
//timers: para trabajar con tareas asincrónicas. 
//console: para mostrar mensajes en la consola. 

//Modulos de terceros: 

//Desde la web de NPM podes encontrar modulos y paquetes que podes sumar a tu proyecto: https://www.npmjs.com


//Buscar express (que es un framework que vamos a ver el sabado que viene).

//Instalamos: npm i express
//Borramos: npm uninstall express
//Intalamos una version espcifica: npm install express@4.0.0
//Instalamos la ultima version: npm install express@latest
//Instalamos una dependencia de desarrollo: npm i nodemon -D
//Son aquellas que solo necesitamos para desarrollar nuestra aplicación. 

//Dependencias globales:  npm list -g (ver el listado)
//Quedan disponibles para todos los nuevos proyectos. 

