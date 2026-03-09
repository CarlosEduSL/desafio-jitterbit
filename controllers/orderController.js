const Order = require('../models/Order');

// Função para criar um novo pedido com transformação de dados
exports.createOrder = async (req, res) => {
  try {
    const data = req.body;

    // Realizando o Mapping (Transformação dos campos) conforme o desafio
    const transformedOrder = {
      orderId: data.numeroPedido,
      value: data['valor Total'],
      creationDate: new Date(data.dataCriacao),
      items: data.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeltem,
        price: item.valoritem || item.valorltem
      }))
    };

    // Criando o documento no banco de dados
    const newOrder = new Order(transformedOrder);
    await newOrder.save();

    // Retornando a resposta com status 201 (Created)
    return res.status(201).json(newOrder);

  } catch (error) {
    // Tratamento de erro conforme critério de avaliação
    return res.status(400).json({
      message: "Erro ao processar a criação do pedido",
      error: error.message
    });
  }
};