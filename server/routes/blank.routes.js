var express = require('express');
var router = express.Router();
const blanks = require('../controllers/blank.controller');
const multer = require('multer');
// const sql = require('../models/db');
const locations = require('../../config/locations.config');
const dest = locations.files + '/blanks';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest)
  },
  filename: (req, file, cb) => {
    const name = `blank_t${req.body.templateId}_l${req.body.languageId}.docx`
    cb(null, name)
  }
})

const upload = multer({
  dest,
  storage: storage
});
/* GET languages listing. */
router.get('/', blanks.findAll);
router.get('/templatesBlanks', blanks.findBlanksByTemplateId);
router.get('/blank', blanks.downloadBlank);

router.post('/add', upload.single('file'), blanks.addBlank);
router.post('/update', upload.single('file'), blanks.updateBlank);
router.post('/delete', upload.none(), blanks.deleteBlank);

router.post('/uploadFile', upload.single('file'), (req, res) => {
  const { originalname, buffer, path } = req.file;
  res.download(path, originalname, (err) => err && res.end({}));
});



module.exports = router;
