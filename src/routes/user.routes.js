const { Router } = require('express')

const router = Router()
const userCTRL = require('../controllers/users.controller')

router.get('/', userCTRL.getUsers)
router.get('/:id', userCTRL.getUser)
router.post('/', userCTRL.saveUser)
router.put('/:id', userCTRL.updateUser)
router.get('/:id/:status', userCTRL.deleteUser)


module.exports = router