const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all suggested task router
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM task;';
    pool.query(sqlText)
        .then((result) => {
            console.log('got tasks back from GET router', result);
            res.send(result.rows);
        }) 
        .catch((error) => {
            console.log('error completing GET query', error);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;