const express = require('express');
const app = express(); //declaracion de var que es el producto de la fx de express, permite usar express como queramos

const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

/* app.get('/', function(req, res) { //conf de una solicitud get cuando el path sea un / ejecutaran el sgt callback
    res.send('Hello World')
}); */
app.use(express.static(__dirname + '/public')); //middleware

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'maju'
    });

});
//app.use(express.static(__dirname + '/public/home.html')); //middleware


app.get('/about', (req, res) => {
    res.render('about');



});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});