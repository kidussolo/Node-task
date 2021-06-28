const express = require("express");
const router = express.Router();

const  db = require("../models");


// const User = UserModel(sequelize, Sequelize);

// @route GET api/users
// @desc  Get all users
// @access public
router.get("/users", (req, res) => {
  db.user.findAll()
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
  db.user.findOne({
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
