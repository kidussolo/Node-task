"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstname: "kidus",
          lastname: "solomon",
          age: 24,
          createdAt: "2020-03-28",
          updatedAt: "2020-03-28"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
