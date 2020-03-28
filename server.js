const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./api/users");

//db connection
const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//test db connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// api route
app.use("/api", users);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port ${port}`));
