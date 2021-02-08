const express = require("express");
const app = express();

const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})