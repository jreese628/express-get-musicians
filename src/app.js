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

  // Send the musicians as a JSON response
  res.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  // Retrieve all musicians from the database
  let id = req.params.id
  let retMusician = await Musician.findByPk(id)
  res.json(retMusician)
});

app.post("/musicians", async (req, res) => {
  const newMusician = req.body;
  const createdMusician = await Musician.create(newMusician);
  res.json(createdMusician)
});

app.put("/musicians/:id", async (req, res) => {
  const id = req.params.id
  const updatedMusiciansData = req.body;

  const musicians = await Musician.findByPk(id);
  const updatedMusicians = await musicians.update(updatedMusiciansData);
  res.json(updatedMusicians);
});

app.delete("/musicians/:id", async (req, res) => {
  const id = req.params.id;

  const musicians = await Musician.findByPk(id);
  await musicians.destroy();
  res.status(200).send()
});



module.exports = app;