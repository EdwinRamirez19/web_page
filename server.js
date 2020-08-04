const express = require("express");
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 3000;
require('./hbs/helpers/helpers')
app.use(express.static(__dirname + '/public'))


// uso de layouts para conformar las vistas que la informacion no se repita
hbs.registerPartials(__dirname + '/views/layouts')
app.set("view engine", "hbs");




// rutas de la pagina web
app.get("/", function(req, res) {
    res.render('home', { nombre: 'edwin ramIrez' })
});

app.get("/about", function(req, res) {
    res.render('about')
});


//servidor 
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`)

});