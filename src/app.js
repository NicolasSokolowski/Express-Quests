const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userController = require("./controllers/userController");

const app = express();

app.use(express.json());


app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", movieControllers.postMovie);

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUserById);
app.post("/api/users", userController.postUser);

module.exports = app;
