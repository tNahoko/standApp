require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("./knex");

const PORT = process.env.PORT || 9000;

app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
  });

(async () => {
  try {
    // console.log("Running migrations...");
    // await db.migrate.latest();

    // console.log("Running seeds...");
    // await db.seed.run();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });

  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();


