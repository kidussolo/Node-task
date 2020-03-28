'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    metadata: DataTypes.JSON
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};