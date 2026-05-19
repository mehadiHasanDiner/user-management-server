const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("user server is available");
});

const users = [
  { id: 1, name: "shabana", email: "saba@na.come" },
  { id: 2, name: "shabnur", email: "shab@nnu.come" },
  { id: 3, name: "omorsani", email: "omor@sani.come" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post method called", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user server started on port ${port}`);
});
