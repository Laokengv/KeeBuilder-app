const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/stabilizers', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "stabilizers";`)
      .then((result) => {
        res.status(200).send(result.rows);
      }).catch((err) => {
        console.log('Error in getStabilizers', err);
      });
  });

  module.exports = router;