const express = require("express");
let app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./user");

// http://localhost:5000/message
app.get("/message", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

// http://localhost:5000/add-message
app.post("/add-message", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "message added successfully" });
});

app.listen(5000, () => console.log("server started"));
