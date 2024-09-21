const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userController = require("./controllers/userController");

const app = express();


app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUserById);

module.exports = app;
