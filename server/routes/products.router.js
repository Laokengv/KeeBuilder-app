const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/cases', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "cases";`)
        .then((result) => {
            res.status(200).send(result.rows);
        }).catch((err) => {
            console.log('Error in getCases', err);
        });
});

router.get('/keycaps', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "keycaps";`)
        .then((result) => {
            res.status(200).send(result.rows);
        }).catch((err) => {
            console.log('Error in getKeycaps', err);
        });
});

router.get('/stabilizers', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "stabilizers";`)
        .then((result) => {
            res.status(200).send(result.rows);
        }).catch((err) => {
            console.log('Error in getStabilizers', err);
        });
});

router.get('/switches', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "switches";`)
        .then((result) => {
            res.status(200).send(result.rows);
        }).catch((err) => {
            console.log('Error in getSwitches', err);
        });
});

module.exports = router;