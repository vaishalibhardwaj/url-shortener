const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlcontrollers');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/shorten', authenticate, shortenUrl);
router.get('/:hash', redirectUrl);

module.exports = router;
