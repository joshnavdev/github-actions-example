const express = require("express");
const os = require("os");

const hostname = os.hostname();
const env = process.env.NODE_ENV || "dev";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello world", hostname, port, env });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
