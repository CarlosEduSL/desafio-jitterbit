const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true }, // v10089016vdb
  value: Number,
  creationDate: Date,
  items: [{
    productId: Number,
    quantity: Number,
    price: Number
  }]
});