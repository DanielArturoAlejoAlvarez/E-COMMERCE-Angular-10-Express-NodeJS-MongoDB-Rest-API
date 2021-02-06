# E-COMMERCE WITH MEAN STACK (Rest API)

## Description

This repository is a Application software with NodeJS, Express, JWT, MongoDB, Angular, etc this application contains an REST API.

## Installation
Using NodeJS, Express, Mongoose, Bcrypt, JWT, etc preferably.

## DataBase
Using MongoDB preferably.

## Apps
Using Postman, Insomnia, Talend API Tester, etc to feed the api.

## Usage
```html
$ git clone https://github.com/E-COMMERCE-Angular-10-Express-NodeJS-MongoDB-Rest-API.gif [NAME APP] 

$ npm install

$ npm run dev (Backend)

$ ng serve (Frontend)
```
Follow the following steps and you're good to go! Important:


![alt text](https://miro.medium.com/max/1600/1*Q7a1jSiY347R3lSD8ajNsQ.gif)


## Coding

### Config

```javascript
...
module.exports = {
  secretKey:
    process.env.SECRET_KEY ||
    "pbOweRnRbFOUJ6dqBZJgJV$MPPnPxhdxUz.L_rMqeFY0EOsZ8xH2K5r0FgUMir",
  port: process.env.PORT || 3000,
  DB: {
    URI:
      process.env.MONGO_URI ||
      "mongodb://127.0.0.1:27017/ecommercemeanstack_db",
    USER: process.env.MONGO_USER,
    PASSWORD: process.env.MONGO_PASSWORD,
  },
};

...
```

### Routes

```javascript
...
const { Router } = require('express')

const router = Router()
const userCTRL = require('../controllers/users.controller')
const { isAuth } = require('../middlewares/authentication')

router.get('/', isAuth, userCTRL.getUsers)
router.get('/:id', isAuth, userCTRL.getUser)
router.post('/', isAuth, userCTRL.saveUser)
router.put('/:id', isAuth, userCTRL.updateUser)
router.delete('/:id/:status', isAuth, userCTRL.deleteUser)
router.get('/image/:img', token_image, userCTRL.viewImage)

module.exports = router
...
```

### Middlewares

```javascript
...

const config = require("../config/config");
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  let token = req.get("Authorization");

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Token is invalid!",
      });
    }

    req.user = user.data;

    next();
  });
};

const token_image = (req, res, next) => {
  let token = req.query.token;

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Token is invalid!",
      });
    }

    req.user = user.data;

    next();
  });
};

module.exports = {
  isAuth,
  token_image
}

...
```

### Controllers


```javascript
...
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
...

```

### Model

```javascript
...
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
...
```



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/E-COMMERCE-Angular-10-Express-NodeJS-MongoDB-Rest-API. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).