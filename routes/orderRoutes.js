const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rota para criar pedido: POST http://localhost:3000/order
router.post('/', orderController.createOrder);

// Rota para buscar pedido: GET http://localhost:3000/order/:orderId 
router.get('/:orderId', orderController.getOrderByNumber);

module.exports = router;