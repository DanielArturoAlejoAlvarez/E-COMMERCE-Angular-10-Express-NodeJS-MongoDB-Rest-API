const { Router } = require('express')

const router = Router()
const productCTRL = require('../controllers/products.controller')
const { isAuth } = require('../middlewares/authentication')

//router.get('/', isAuth, productCTRL.getProducts)
//router.get('/:id', isAuth, productCTRL.getProduct)
router.post('/', isAuth, productCTRL.saveProduct)
//router.put('/:id', isAuth, productCTRL.updateProduct)
//router.delete('/:id/:status', isAuth, productCTRL.deleteProduct)


module.exports = router