const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/ping", (req, res) => {
  res.json({ pong: true });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
