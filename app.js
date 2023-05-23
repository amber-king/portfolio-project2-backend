// Dependencies
const express = require("express");
const cors = require("cors");
const rocksControllers = require("./controllers/rocksControllers");

// Configuration
const app = express();

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// - allows us to group the route handlers for a particular part of a site together and access them using a common route-prefix.

//Miiddleware
app.use(cors());
app.use(express.json());

// Routes - for home page
app.get("/", (req, res) => {
  res.json("Welcome to Rock-World 🗿");
});

// https://www.tutorialspoint.com/express-js-app-use-method#:~:text=The%20app.,path%20matches%20the%20defined%20path.
// mounts or puts the specified middleware finctions at the specified path.

// here rockControllers is being mounted here along with rock index page to keep track of change
app.use("/rocks", rocksControllers);

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

// Export
module.exports = app;
