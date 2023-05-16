// Dependecies
const express = require("express");
const rocks = express.Router();
const {
  getAllRocks,
  getOneRock,
  createOneRock,
  updateOneRock,
  deleteOneRock,
} = require("../queries/rocks.js");

// GET All Rocks
// /rocks
rocks.get("/", async (req, res) => {
  const allRocks = await getAllRocks();
  if (allRocks[0]) {
    res.status(200).json(allRocks);
  } else {
    res.status(500).json({ error: "server errors" });
  }
});

// SHOW one rock
// /rocks/:id
rocks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const rock = await getOneRock(id);
  if (rock) {
    res.status(200).json(rock);
  } else {
    res.status(404).json({ error: "Rock not found" });
  }
});

// CREATE one rock
// /rocks
rocks.post("/", async (req, res) => {
  const rock = await createOneRock(req.body);
  if (rock) {
    res.status(200).json(rock);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

// UPDATE one rock
// /rocks/:id
rocks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const rock = await updateOneRock(id, req.body);
  if (rock) {
    res.status(200).json(rock);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

// DELETE one rock
// /rocks/:id
rocks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRock = await deleteOneRock(id);
  if (deletedRock) {
    res.status(200).json(deletedRock);
  } else {
    res.status(404).json({ error: "No Rock Here" });
  }
});

module.exports = rocks;
