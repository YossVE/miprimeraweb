//alert("Hola este es mi Javascript");

let nombre = "Marta";
nombre = "Yoselyn";

var nombre1 = "Marta";

const nombre2 = "Marta";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);

//Seleccionar elementos

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo .fuente-acento")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Mi web";
} else {
    console.log ("no se cumple");
}

//FUNCIONES

let nombre10 = "Ani";
let ciudad10 = "Bs As";
let gusto10 = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre10, ciudad10, gusto10) {
    let contenido = `Me llamo ${nombre10}, nací en ${ciudad10} y vivo en Caballito. Me gusta el ${gusto10} y salir a pasear en días de sol. Me encantaria aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

    return contenido;
}

parrafo.innerText = cambiarTexto (nombre10, ciudad10, gusto10);
