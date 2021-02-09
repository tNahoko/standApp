// const seedList = require("../../../data/import.js");
const fs = require("fs");
const db = require("../../../server/knex");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('list')
    .truncate()
    .then(function () {
      // Inserts seed entries
      seedList();
    });
};

const seedList = async () => {
  try {
    const list = JSON.parse(fs.readFileSync("data/list.json"));
    for (const item of list) {
      
      const id = item.id;
      const date = item.date;
      const desc = item.task.desc;
      const status = item.task.status;
      console.log("id", id, "date", date, "desc", desc, "status", status)
      await db('list').insert({
        id,
        date,
        desc,
        status,
      });
      console.log("id", id, "date", date, "desc", desc, "status",)
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};