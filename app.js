// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Miiddleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("Welcome to Rock-World 🗿");
});


// app.use("/snacks", snacksControllers);

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

// Export
module.exports = app;
