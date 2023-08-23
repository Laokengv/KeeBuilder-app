const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here
    pool.query(`SELECT 
    "keyboard"."id",
    "keyboard"."name_of_keyboard",
    "cases"."image" AS "case_image",
    "cases"."name" AS "case_name",
    "keycaps"."image" AS "keycaps_image",
    "keycaps"."name" AS "keycaps_name",
    "stabilizers"."image" AS "stabilizers_image",
    "stabilizers"."name" AS "stabilizers_name",
    "switches"."image" AS "switches_image",
    "switches"."name" AS "switches_name" FROM "keyboard" 
    JOIN "cases" ON "keyboard"."cases_id" = "cases"."id"
    JOIN "keycaps" ON "keyboard"."keycaps_id" = "keycaps"."id"
    JOIN "stabilizers" ON "keyboard"."stabilizers_id" = "stabilizers"."id"
    JOIN "switches" ON "keyboard"."switches_id" = "switches"."id" WHERE "keyboard"."id" = $1;`, [req.user.id])
      .then((result) => {
        res.status(200).send(result.rows);
      }).catch((err) => {
        res.sendStatus(500);
        console.log('Error in GET', err);
      });
  });

  router.post('/', (req, res) => {
    let keyboard = req.body;
    console.log(req.user);
    pool.query(`INSERT INTO "keyboard" ("user_id", "cases_id", "keycaps_id", "stabilizers_id", "switches_id", "name_of_keyboard")
    VALUES ($1, $2, $3, $4, $5, $6);
    `, 
    [req.user.id, keyboard.cases_id, keyboard.keycaps_id, keyboard.stabilizers_id, keyboard.switches_id, 'casekebyard'])
    .then((result) => {
        res.sendStatus(201);
      }).catch((err) => {
        res.sendStatus(500);
        console.log('Error in POST', err);
      });
  })

  router.put('/:id', (req, res) => {
    const keyboardId = req.params.id;
    const updatedKeyboard = req.body;
  
    const query = `
      UPDATE "keyboard"
      SET
        "cases_id" = $1,
        "keycaps_id" = $2,
        "stabilizers_id" = $3,
        "switches_id" = $4,
        "name_of_keyboard" = $5
      WHERE "id" = $6;
    `;
  
    const values = [
      updatedKeyboard.cases_id,
      updatedKeyboard.keycaps_id,
      updatedKeyboard.stabilizers_id,
      updatedKeyboard.switches_id,
      updatedKeyboard.name_of_keyboard,
      keyboardId
    ];
  
    pool.query(query, values)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.error('Error in PUT', error);
        res.sendStatus(500);
      });
  });
  

  router.delete('/:id', (req, res) => {
    const keyboardId = req.params.id;
  
    const query = `
      DELETE FROM "keyboard"
      WHERE "id" = $1;
    `;
  
    pool.query(query, [keyboardId])
      .then(() => {
        console.log('Keyboard deleted');
        res.sendStatus(200);
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  });
  


  module.exports = router;