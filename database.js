/* eslint-disable no-undef */
require("dotenv").config();

// eslint-disable-next-line no-unused-vars
const mysql = require("mysql2/promise");
// const { isAxiosError } = require("axios");

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
database
  .query("select * from movies")
  .then(([movies]) => {
    console.log(movies);
  })
  .catch((err) => {
    console.error(err);
  });

database
  .query("select * from users")
  .then(([users]) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  });
module.exports = database;
