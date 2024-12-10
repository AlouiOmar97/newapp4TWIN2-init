var express = require('express')
var router = express.Router()
const { list, create } = require('../service/userService')
var validate = require('../middleware/validation')


router.get('/list', list)
router.post('/create/:age', validate, create)

module.exports = router