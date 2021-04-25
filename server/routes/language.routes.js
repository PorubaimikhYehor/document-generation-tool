var express = require('express');
var router = express.Router();
const languages = require('../controllers/language.controller')

/* GET languages listing. */
router.get('/', languages.findAll);
router.post('/toggleActive', languages.toggleActive);
router.get('/active', languages.findActive);
// router.get('/active', (req, res) => res.send('hello'));



module.exports = router;
