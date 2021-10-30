const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EmployeeRoute = require("./routes/employee");

mongoose.connect("mongodb://localhost:27017/local");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(`DB Connection Error: ${err}`);
});

db.once("open", () => {
  console.log(`Database connection established`);
});

app.use(express.json());
app.use("/api/employee", EmployeeRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
