require("dotenv").config();

const express = require("express");
const { urlencoded, json } = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
