const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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