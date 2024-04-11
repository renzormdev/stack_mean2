const Cliente = require('../model/Cliente');

// Mostrar todos los clientes
module.exports.mostrar = (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los clientes',
                error: error.message
            });
        }
        return res.render('index', { clientes: clientes });
    });
};

// Crear un nuevo cliente
module.exports.crear = (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion
    });
    cliente.save((error, clienteGuardado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear al cliente',
                error: error.message
            });
        }
        res.redirect('/');
    });
};

// Editar un cliente existente
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar;
    const apellidos = req.body.apellidos_editar;
    const direccion = req.body.direccion;

    Cliente.findByIdAndUpdate(id, { nombre, apellidos, direccion }, (error, clienteActualizado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al cliente',
                error: error.message
            });
        }
        res.redirect('/');
    });
};

// Borrar un cliente existente
module.exports.borrar = (req, res) => {
    const id = req.params.id;

    Cliente.findByIdAndRemove(id, (error, clienteEliminado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando al cliente',
                error: error.message
            });
        }
        res.redirect('/');
    });
};
