const express = require('express');
const dbConnection = require('../database/dbConnect');
const router = express.Router();

router.get("/contract", async (req, res) => {
  try {
    const request = await dbConnection;
    request.query("SELECT * FROM contract", (err, result) => {
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
    const result = await dbConnection.query("INSERT INTO contract (createdAt, deposit, name, dob, cmnd, address, value, number, propID, contractID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '0', '0')", [createdAt, deposit, name, dob,cmnd,address, value, number], (err, result) => {
      if(err) {
        throw err
      }
      const lastID = result.insertId;
      const Day = new Date().getDate();
      const Month = new Date().getMonth() + 1
      const contractID = String(Day) + String(Month) + '0000' + lastID
      const propID = 'BDS0000' + lastID
      dbConnection.query('UPDATE contract SET contractID = ?, propID = ? WHERE id = ?', [contractID, propID, lastID], (err, result) => {
        if(err) {
          throw err
        }
      })
    })
    if(result) {
      res.json({ success: true });
    } 
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

router.get("/property", async (req, res) => {
  try {
    const request = await dbConnection;
    request.query("SELECT * FROM property", (err, result) => {
      res.status(200).json({ success: true, data: result});
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.post("/add-property", async (req, res) => {
  const {
    name, scale, service, country, district, address, rooms, value, type
  } = req.body;

  try {
    const result = await dbConnection.query("INSERT INTO property (name, scale, service, country, district, address, rooms, value, type, propID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, '0')", [name, scale, service, country, district, address, rooms, value ,type], (err, result) => {
      if(err) {
        throw err
      }
      const lastID = result.insertId;
      const propID = 'BDS0000' + lastID
      dbConnection.query('UPDATE property SET propID = ? WHERE id = ?', [propID, lastID], (err, result) => {
        if(err) {
          throw err
        }
      })
    })
    if(result) {
      res.json({ success: true });
    } 
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});
module.exports = router;

