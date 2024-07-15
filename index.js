const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const start = Date.now();
  const hostname = os.hostname();

  // Simulate load with a delay
  setTimeout(
    () => {
      const timeTaken = Date.now() - start;
      res.send(`Server: ${hostname}, Time taken: ${timeTaken}ms`);
    },
    Math.floor(Math.random() * 1000),
  ); // Simulate a delay between 0 to 1000ms
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
