const express = require('express');
const pool = require('../modules/galleryItems');
const router = express.Router();

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;