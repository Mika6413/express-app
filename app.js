/* eslint-disable no-undef */
require("dotenv").config();

const express = require("express");

const { hashPassword, verifyPassword, verifyToken } = require("./auth");

const movieHandlers = require("./movieHandlers");

const users = require("./users");

const { validateMovie, validateUser } = require("./validators.js");

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5022;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
app.get("/", welcome);


// const isItDwight = (req, res) => {
//   if (
//     req.body.email === "dwight@theoffice.com" &&
//     req.body.password === "123456"
//   ) {
//     res.send("Credentials are valid");
//   } else {
//     res.sendStatus(401);
//   }
// };
// app.post("/api/login", isItDwight);
app.post(
  "/api/login",
  users.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.post("/api/movies", validateMovie, verifyToken, movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUserById);
app.post("/api/users", validateUser, hashPassword, users.postUser);
app.put("/api/users/:id", hashPassword, users.updateUser);
app.delete("/api/users/:id", users.deleteUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
