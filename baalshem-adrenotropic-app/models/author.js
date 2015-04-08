"use strict";
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        this.hasMany(models.Article);
      }
    }
  });
  return Author;
};