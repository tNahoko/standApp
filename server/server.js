require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const db = require("./knex");
const cors = require("cors");

const PORT = process.env.PORT || 9000;

app.use(express.static('public'));
app.use(express.json());

app.use(cors());

app.get("/api", async (req, res) => {
  const data = await db.select().table("list");
  res.status(200);
  res.json(data);
});

app.post("/api", async (req, res) => {
  
  if(!req.body.date || !req.body.desc) {
    res.status(400).send({
      message: "Both date and description are required."
    });
    return;
  }

  try {
    const newItem = {
      date: req.body.date,
      desc: req.body.desc,
      status: "pending"
    };
    await db('list').insert(newItem);
    const data = await db.select().table("list");
    res.status(200);
    res.json(data);
  } catch (error) {
    res.sendStatus(400);
  }
});

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });


