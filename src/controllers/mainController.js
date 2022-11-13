const path = require('path');

let productos = [
    {
        id:1,
        nombre: 'Carpaccio fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        precio: 'U$S 65.50',
        img:'/images/Carpaccio-de-salmon.jpg',
        url:'/detalle/0'
    },
    {
        id:2,
        nombre: 'Risotto de berenjena',
        descripcion: '',
        precio: 'U$S 47.00',
        img:'/images/Risotto-berenjena-queso-cabra.jpg',
        url:'/detalle/1'
    },
    {
        id:3,
        nombre: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        precio: 'U$S 27.50',
        img:'/images/Mousse-de-arroz-con-leche.jpg',
        url:'/detalle/2'
    },
    {
        id:4,
        nombre: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 'U$S 37.50',
        img:'/images/esparragos.png',
        url:'/detalle/3'
    }
]
 
const mainController = {
    home: (req, res) => {
        res.render('index', {productos});
    },
    detalleProducto:(req, res) => {
        let producto = productos[req.params.id];
        res.render('detalle', {producto});
    },
    about: (req, res) => {
        res.render('index', {productos});
    }
}

module.exports = mainController;