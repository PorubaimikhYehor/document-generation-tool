var express = require('express');
var router = express.Router();
const controller = require('../controllers/content.controller');
const multer = require('multer');
// const sql = require('../models/db');
const locations = require('../../config/locations.config');
const dest = locations.files + '/content';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest)
  },
  filename: (req, file, cb) => {
    const name = `content_c${req.body.contentId}_l${req.body.languageId}.docx`
    cb(null, name)
  }
})

const upload = multer({
  dest,
  storage: storage
});

/* GET languages listing. */
router.get('/', controller.findAll);
router.post('/', controller.addOne);
router.put('/:id', controller.updateOne);
router.delete('/:id', controller.deleteOne);
router.post('/updateOrder',controller.updateOrder);


// router.get('/templatesBlanks', blanks.findBlanksByTemplateId);
router.get('/file', controller.downloadFile);
router.post('/file/add', upload.single('file'), controller.addFile);
router.post('/file/update', upload.single('file'), controller.updateFile);
router.post('/file/delete', upload.none(), controller.deleteFile);

module.exports = router;
