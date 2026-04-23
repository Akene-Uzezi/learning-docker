const express = require("express");
const pool = require("./db/db");
const port = 1337;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/setup", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", (req, res) => {
  const { name, location } = req.body;
  res.status(200).send({
    message: `your keys were ${name}, ${location}`,
  });
});

app.listen(port, () => {
  console.log(`server has started on port: ${port}`);
});
