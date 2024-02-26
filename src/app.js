const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/musicians", async (req, res) => {
  // Retrieve all musicians from the database
  const musicians = await Musician.findAll();
  res.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  // Retrieve all musicians from the database
  let getMusician = await Musician.findByPk(req.params.id)
  res.json(getMusician)
});

app.post("/musicians", async (req, res) => {
  const musician = await Musician.create(req.body);
  res.json(musician)
});

app.put("/musicians/:id", async (req, res) => {
  const updatedMusiciansData = req.body;
  const musicians = await Musician.findByPk(req.params.id);
  const updatedMusicians = await musicians.update(updatedMusiciansData);
  res.json(updatedMusicians);
});

app.delete("/musicians/:id", async (req, res) => {
  const musicians = await Musician.findByPk(req.params.id);
  await musicians.destroy();
  res.status(200).send()
});



module.exports = app;