const fs = require("fs");
const db = require("../server/knex");

const seedList = async () => {
  try {
    const list = JSON.parse(fs.readFileSync("./data/list.json"));
    for (const item of list) {
      const id = item.id;
      const date = item.date;
      const desc = item.task.desc;
      const status = item.task.status;
      
      await db("list").insert({
        id,
        date,
        desc,
        status,
      });
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};

module.exports = seedList;
