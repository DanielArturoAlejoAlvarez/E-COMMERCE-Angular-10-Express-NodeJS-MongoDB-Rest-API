const Client = require("../models/Client");

const CTRLS = {};

CTRLS.getClients = (req, res) => {
  Client.find({}).exec((err, clients)=>{
    return res.json(clients)
  })
};

CTRLS.saveClient = (req, res) => {
  const client = new Client({
    displayName: req.body.displayName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  })

  console.log(client)

  client.save((err, newClient) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      client: newClient,
    });
  });


};

module.exports = CTRLS;
