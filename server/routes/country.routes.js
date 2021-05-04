var express = require('express');
var router = express.Router();
const controllers = require('../controllers/country.controller')

/* GET country listing. */
router.get('/', controllers.findAll);
router.post('/', controllers.addOne);
router.put('/:id', controllers.updateOne);
router.delete('/:id', controllers.deleteOne);
router.post('/updateOrder', controllers.updateOrder);


module.exports = router;
