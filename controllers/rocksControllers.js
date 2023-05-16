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

const {
  checkHardnessBoolean,
  checkRockElement,
} = require("../validations/validations.js");

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
  const soloRock = await getOneRock(id);
  if (soloRock) {
    res.status(200).json(soloRock);
  } else {
    res.status(404).json({ error: "Rock not found" });
  }
});

// CREATE one rock
// /rocks
rocks.post("/", async (req, res) => {
  const newRock = await createOneRock(req.body);
  if (newRock) {
    res.status(200).json(newRock);
  } else {
    res.status(404).json({ error: "No rock added" });
  }
});

// UPDATE one rock
// /rocks/:id
// also include validator for proper user editing requirements via user
rocks.put("/:id", checkRockElement, checkHardnessBoolean, async (req, res) => {
  const { id } = req.params;
  const changedRock = await updateOneRock(id, req.body);
  if (changedRock) {
    res.status(200).json(changedRock);
  } else {
    res.status(404).json({ error: "Rock not modfied" });
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
