const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

const UserModel = require("../models/user");

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize);

// @route GET api/users
// @desc  Get all users
// @access public
router.get("/users", (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

// @route GET api/users/:id
// @desc  Get one user by id
// @access public
router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findOne({
    where: {
      id: id
    }
  })
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

module.exports = router;
