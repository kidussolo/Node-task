const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world"
  });
});

//connection string

//routes for
// const users = require("./router/api/user");

//Connect to Database

// app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
