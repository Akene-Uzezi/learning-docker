const express = require("express");
const pool = require("./db/db");
const port = 1337;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("select * from schools");
    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "create table schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address varchar(100))",
    );
    res.status(200).send({ message: "successfully created table" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;
  try {
    await pool.query("insert into schools (name, address) values ($1, $2)", [
      name,
      location,
    ]);
    res.status(200).send({ message: "Successfully added child" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`server has started on port: ${port}`);
});
