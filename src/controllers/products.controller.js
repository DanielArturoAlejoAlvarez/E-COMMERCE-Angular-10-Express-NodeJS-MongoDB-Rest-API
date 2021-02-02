const Product = require("../models/Product");
const path = require("path");

const CTRLS = {};

CTRLS.getProducts = (req, res) => {
  Product.find({})
    .sort({ createdAt: "DESC" })
    .where({ status: true })
    .populate("category")
    .exec((err, products) => {
      return res.json(products);
    });
};

CTRLS.getProduct = (req, res) => {};

CTRLS.saveProduct = (req, res) => {
  if (!req.files) {
    return res.json({ msg: "No files where uploaded!" });
  }

  const image = req.files.image;

  image.mv(`uploads/products/${image.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    const product = new Product({
      category: req.body.category,
      name: req.body.name,
      excerpt: req.body.excerpt,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      image: image.name,
      status: req.body.status,
    });

    console.log(product);

    product.save((err, newProduct) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }

      res.status(201).json({
        ok: true,
        product: newProduct,
      });
    });
  });
};

CTRLS.updateProduct = (req, res) => {};

CTRLS.deleteProduct = (req, res) => {};

CTRLS.viewImage = (req, res) => {
  const urlImage = path.join(
    __dirname,
    "./../../uploads/products",
    req.params.img // /products/image/:img
  );
  return res.sendFile(urlImage);
};

module.exports = CTRLS;
