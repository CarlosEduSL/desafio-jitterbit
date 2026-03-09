const createOrder = async (req, res) => {
  try {
    const data = req.body;

    // Realizando o mapping exigido pelo desafio 
    const transformedOrder = {
      orderId: data.numeroPedido,
      value: data['valor Total'],
      creationDate: new Date(data.dataCriacao),
      items: data.items.map(item => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeltem,
        price: item.valoritem || item.valorltem
      }))
    };

    const newOrder = new Order(transformedOrder);
    await newOrder.save();
    
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: "Erro ao processar pedido", error: error.message });
  }
};