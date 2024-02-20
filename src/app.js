const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 


app.get("/musicians", async (req, res) => {
    // Retrieve all musicians from the database
    const musicians = await Musician.findAll();
  
    // Send the musicians as a JSON response
    res.json(musicians);
  });




module.exports = app;