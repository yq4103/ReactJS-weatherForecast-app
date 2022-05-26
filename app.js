//imports
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("/*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// listen on port 3000
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.info(`listening on port ${port}`);
});
