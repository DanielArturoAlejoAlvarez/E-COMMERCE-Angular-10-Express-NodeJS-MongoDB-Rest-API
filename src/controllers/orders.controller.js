const Order = require("../models/Order");
const Product = require("../models/Product");

const getOrders = (req, res) => {
  Order.find({})
    .sort({ createdAt: "DESC" })
    .populate("client")
    .populate("orderItems.product")
    .exec((err, orders) => {
      return res.json(orders);
    });
};

const saveOrder = (req, res) => {
  
};

const validateQty = async (products, cb) => {
  
};

module.exports = {
  getOrders,
  saveOrder,
};
