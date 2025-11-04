const express = require("express");
const os = require("os");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`IoT Sensor API running on pod: ${os.hostname()}`);
});

// Simulate a CPU load
app.get("/load", (req, res) => {
  const end = Date.now() + 10000; // 10 sec CPU load
  while (Date.now() < end) {
    Math.sqrt(Math.random());
  }
  res.send("Heavy load completed");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
