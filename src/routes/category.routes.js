const { Router } = require('express')

const router = Router()
const categoryCTRL = require('../controllers/categories.controller')
const { isAuth } = require('../middlewares/authentication')

router.get('/', isAuth, categoryCTRL.getCategories)
router.post('/', isAuth, categoryCTRL.saveCategory)



module.exports = router