const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/
router.use('/tours', require('./tours'));
router.use('/guests', require('./guests'));

module.exports = router;