const { Router } = require('express')

const router = Router()
const productCTRL = require('../controllers/products.controller')
const { isAuth, token_image } = require('../middlewares/authentication')

router.get('/', productCTRL.getProducts)
//router.get('/:id', isAuth, productCTRL.getProduct)
router.post('/', productCTRL.saveProduct)
//router.put('/:id', isAuth, productCTRL.updateProduct)
//router.delete('/:id/:status', isAuth, productCTRL.deleteProduct)

router.get('/image/:img', token_image, productCTRL.viewImage)
module.exports = router