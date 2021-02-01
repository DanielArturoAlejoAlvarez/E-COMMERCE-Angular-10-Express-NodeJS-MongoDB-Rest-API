const Category = require("../models/Category");

const CTRLS = {};

CTRLS.getCategories = (req, res) => {
  Category.find({}).exec((err, categories) => {
    return res.json(categories);
  });
};

CTRLS.getCategory = (req, res) => {};

CTRLS.saveCategory = (req, res) => {
  const category = new Category({
    name: req.body.name,
    status: req.body.status,
  });

  console.log(category);

  category.save((err, newCategory) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      category: newCategory,
    });
  });
};

CTRLS.updateCategory = (req, res) => {};

CTRLS.deleteCategory = (req, res) => {};

module.exports = CTRLS;
