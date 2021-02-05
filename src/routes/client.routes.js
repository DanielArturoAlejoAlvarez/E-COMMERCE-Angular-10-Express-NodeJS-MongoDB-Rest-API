const { Router } = require('express')

const router = Router()
const clientsCTRL = require('../controllers/clients.controller')
//const { isAuth } = require('../middlewares/authentication')

router.get('/', clientsCTRL.getClients)
router.post('/', clientsCTRL.saveClient)



module.exports = router