const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userController = require("./controllers/userController");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

const app = express();

app.use(express.json());

app.get("/api/movies", movieControllers.getMovies);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUserById);
app.put("/api/users/:id", validateUser, userController.updateUser);
app.post("/api/users", validateUser, userController.postUser);
app.delete("/api/users/:id", userController.deleteUser);

module.exports = app;
