const http = require('http');



http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'edwin ramirez',
        edad: 24,
        sexo: 'M'
    }
    res.write(JSON.stringify(salida))
    res.end();
}).listen('3000');
console.log('escuchando por el puerto 3000')