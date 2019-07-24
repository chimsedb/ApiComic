const express = require('express');
const router = express.Router();

const link = require('../controllers/link');

router.get('/',link.link);

module.exports = router;