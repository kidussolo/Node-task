const express = require("express");
const bodyParser = require("body-parser");
const {sequelize} = require("./models");
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./api/users");

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
