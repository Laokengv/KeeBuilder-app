const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/keycaps', (req, res) => {
    // GET route code here
    pool.query(`SELECT * FROM "keycaps";`)
      .then((result) => {
        res.status(200).send(result.rows);
      }).catch((err) => {
        console.log('Error in getKeycaps', err);
      });
  });

  module.exports = router;