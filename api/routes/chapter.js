const express = require('express');
const router = express.Router();

const chapter = require('../controllers/chapter');

router.get('/',chapter.chapter);

module.exports = router