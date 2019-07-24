const express = require('express');
const router = express.Router();

const mangacategory = require('../controllers/mangacategory');

router.get('/',mangacategory.mangacategory);

module.exports = router;