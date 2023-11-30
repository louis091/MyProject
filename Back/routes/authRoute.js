const express = require('express');
const dbConnection = require('../database/dbConnect');
const router = express.Router();

router.get("/contract", async (req, res) => {
  try {
    const request = await dbConnection;
    request.query("SELECT * FROM contract", (err, result) => {
      console.log('TEST');
      res.status(200).json({ success: true, data: result});
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.post("/add-contract", async (req, res) => {
  const {
    createdAt, deposit, name, dob, cmnd, address, value, number
  } = req.body;

  try {
    const result = await dbConnection.query("INSERT INTO contract (createdAt, deposit, name, dob, cmnd, address, value, number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [createdAt, deposit, name, dob,cmnd,address, value, number])

    if(result) {
      res.json({ success: true });
    } 
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

module.exports = router;

