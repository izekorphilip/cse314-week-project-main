const express = require('express');
const router = express.Router();

// Base URL
router.get('/', (req, res) => {
    res.send("Contacts API")
});

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));


module.exports = router;
