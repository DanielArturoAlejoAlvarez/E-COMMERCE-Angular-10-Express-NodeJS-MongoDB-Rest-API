const { Router } = require('express')

const router = Router()
const categoryCTRL = require('../controllers/categories.controller')
//const { isAuth } = require('../middlewares/authentication')

router.get('/', categoryCTRL.getCategories)
router.post('/', categoryCTRL.saveCategory)



module.exports = router