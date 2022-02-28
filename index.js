const express = require("express");
const path = require("path");

let app = express();
const routing = require("./src/routers/routing");

const port = 3000;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`Server connected. Port: ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routing);
