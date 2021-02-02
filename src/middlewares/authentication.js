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
