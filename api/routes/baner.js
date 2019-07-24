const express = require('express');
const router = express.Router();

const baner = require('../controllers/baner');

router.get('/',baner.baner);

module.exports = router;