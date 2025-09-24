const express = require("express");
const app = express();

app.get("/api/ping", (req, res) => {
  res.json({ pong: true });
});

if (require.main === module) {
  app.listen(3000);
}

module.exports = app;
