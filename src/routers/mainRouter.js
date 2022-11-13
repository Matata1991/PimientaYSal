const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get('/detalleProducto/:id', mainController.detalleProducto);

module.exports = router;