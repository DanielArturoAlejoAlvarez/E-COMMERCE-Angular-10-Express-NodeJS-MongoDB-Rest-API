const { Router } = require('express')

const router = Router()

const {getOrders, saveOrder} = require('../controllers/orders.controller')

router.get('/', getOrders)
router.post('/', saveOrder)

module.exports = router