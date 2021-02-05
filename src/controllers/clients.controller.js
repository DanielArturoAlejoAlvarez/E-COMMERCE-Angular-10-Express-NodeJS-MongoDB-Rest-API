const Client = require("../models/Client");

const CTRLS = {};

CTRLS.getClients = (req, res) => {
  Client.find({}).exec((err, clients)=>{
    return res.json(clients)
  })
};

CTRLS.saveClient = (req, res) => {
  


};

module.exports = CTRLS;
