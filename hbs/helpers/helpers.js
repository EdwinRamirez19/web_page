const hbs = require('hbs');
const { text } = require('express');
//helpers para funciones de uso general en todo el software

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})


hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })

    return palabras.join(' ');
})