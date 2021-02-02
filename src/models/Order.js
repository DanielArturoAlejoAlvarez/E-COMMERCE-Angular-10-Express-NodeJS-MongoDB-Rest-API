const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  dateReg: {
    type: Date,
    default: Date.now,
  },
  payment: Number,
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  orderItems: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      qty: Number,
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
