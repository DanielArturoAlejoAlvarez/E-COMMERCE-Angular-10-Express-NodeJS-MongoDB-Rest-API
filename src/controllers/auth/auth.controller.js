const config = require("../../config/config");

const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CTRLS = {};

CTRLS.login = (req, res) => {
  
};

module.exports = CTRLS;
