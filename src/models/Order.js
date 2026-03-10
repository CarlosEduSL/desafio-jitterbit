const mongoose = require('mongoose');

// Definição do Schema para os itens dentro do pedido
const ItemSchema = new mongoose.Schema({
  productId: { 
    type: Number, 
    required: true 
  }, // Mapeado de 'idItem'
  quantity: { 
    type: Number, 
    required: true 
  }, // Mapeado de 'quantidadeltem'
  price: { 
    type: Number, 
    required: true 
  } // Mapeado de 'valoritem'
});

// Definição do Schema principal do Pedido (Order)
const OrderSchema = new mongoose.Schema({
  orderId: { 
    type: String, 
    required: true, 
    unique: true 
  }, // Mapeado de 'numeroPedido' [cite: 53, 83]
  value: { 
    type: Number, 
    required: true 
  }, // Mapeado de 'valor Total'
  creationDate: { 
    type: Date, 
    required: true 
  }, // Mapeado de 'dataCriacao'
  items: [ItemSchema] // Array de objetos conforme o PDF
}, { 
  versionKey: '__v', // Mantém o campo de versão visível no exemplo [cite: 91]
  timestamps: false  // Desabilitamos timestamps automáticos para seguir o padrão fixo do desafio
});

module.exports = mongoose.model('Order', OrderSchema);