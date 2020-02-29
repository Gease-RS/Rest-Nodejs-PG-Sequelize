const Router = require('express')
const router = new Router()
const { getAllUsers, getOne } = require('../controllers/user.controller')

router.get('/', getAllUsers)

router.get('/:id', getOne)
module.exports = router