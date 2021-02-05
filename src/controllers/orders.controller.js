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
  const body = req.body;

  validateQty(body.orderItems, (resp) => {
    if (!resp)
      return res.status(401).json({
        ok: false,
        msg: "There are no products to save",
      });

    const order = new Order({
      payment: body.payment,
      client: body.client,
      orderItems: resp,
    });

    order.save((err, newOrder) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }

      res.status(201).json({
        ok: true,
        order: newOrder,
      });
    });
  });
};

const validateQty = async (products, cb) => {
  const products_id = [];

  products.forEach((elem) => {
    products_id.push(elem.product_id);
  });

  const resp = [];

  Product.find()
    .where("_id")
    .in(products_id)
    .exec(async (err, data) => {
      for (const key of data) {
        const qty = products.find((p) => p.product_id == key._id).qty;
        if (qty <= key.stock) {
          const modify = await Product.findByIdAndUpdate(key._id, {
            stock: key.stock - qty,
          });

          if (modify != false) {
            resp.push({
              product: key._id,
              qty: qty,
            });
          }
          console.log(resp);
        }
      }

      cb(resp.length == 0 ? false : resp);
    });
};

module.exports = {
  getOrders,
  saveOrder,
};
