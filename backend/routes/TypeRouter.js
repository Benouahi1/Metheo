const express = require('express')
const router = express.Router()

const {AddType,getType,getTyp} = require('../controllers/TypeController')

router.route('/').get(getType).post(AddType)
router.route('/:id').get(getTyp)


module.exports = router