const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rota para criar pedido: POST http://localhost:3000/order
router.post('/', orderController.createOrder);

// Listar todos
router.get('/list', orderController.listAllOrders);

// Obter um, Atualizar e Deletar usam o mesmo parâmetro de URL
router.route('/:orderId')
  .get(orderController.getOrderByNumber)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;