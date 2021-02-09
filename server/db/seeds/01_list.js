const seedList = require("./import.js");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("list")
    .truncate()
    .then(function () {
      // Inserts seed entries
      seedList();
    });
};