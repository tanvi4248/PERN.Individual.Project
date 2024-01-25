const express = require('express')
const router = express.Router()
// const { getUserById } = require('../db/sqlHelperFunctions/guests')
// const { JWT_SECRET } = require('../secrets')
// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});


// ROUTER: /api/
router.use('/tours', require('./tours'));
router.use('/guests', require('./guests'));
module.exports = router;