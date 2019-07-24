const express = require('express');
const router = express.Router();

const manga = require('../controllers/manga');

router.get('/',manga.manga);

module.exports = router