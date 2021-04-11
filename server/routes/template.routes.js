var express = require('express');
var router = express.Router();
const controllers = require('../controllers/template.controller')

router.get('/', controllers.findAll);
router.post('/updateTemplate', controllers.updateTemplate)
router.post('/', controllers.addOne);

// router.get('/templatesBlanks', blanks.findBlanksByTemplateId);
// router.get('/blank', blanks.findBlank);
router.delete('/:id', controllers.deleteOne);



module.exports = router;
