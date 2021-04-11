var express = require('express');
var router = express.Router();
const controllers = require('../controllers/companyOwners.controller')

/* GET languages listing. */
router.get('/', controllers.findAll);
router.post('/', controllers.addOne);

router.put('/:id', controllers.updateOne);
router.delete('/:id', controllers.deleteOne);



module.exports = router;
