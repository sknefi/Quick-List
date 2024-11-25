const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
require("./db/connection.js");

const eventController = require("./controllers/event.js");
const userController = require("./controllers/user.js");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// why is it called "event"? "shoppingList" is too long and just "list" is wierd
app.use("/event", eventController);
app.use("/user", userController);

console.log("🥳🎉 Server running on http://localhost:" + port);
app.listen(port);