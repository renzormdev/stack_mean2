const express = require('express');
const app = express();
const db = require('./bd.js');
const Cliente = require('./model/Cliente'); // Importa el modelo de Cliente

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los clientes'
            });
        }
        res.render('index', { clientes: clientes });
    });
});

app.listen(4000, () => {
    console.log("Server UP en http://localhost:4000");
});
