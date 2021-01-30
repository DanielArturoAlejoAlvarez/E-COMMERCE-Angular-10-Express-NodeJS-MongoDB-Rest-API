const { Router } = require('express')

const router = Router()
const userCTRL = require('../controllers/users.controller')
const { isAuth } = require('../middlewares/authentication')

router.get('/', isAuth, userCTRL.getUsers)
router.get('/:id', isAuth, userCTRL.getUser)
router.post('/', isAuth, userCTRL.saveUser)
router.put('/:id', isAuth, userCTRL.updateUser)
router.delete('/:id/:status', isAuth, userCTRL.deleteUser)


module.exports = router