const express = require("express");
const cors = require("cors");
const Loggings = require("morgan");
const teacherRoute = require("./Route/teacherRoute");
const childRoute = require("./Route/childRoute");
const classRoute = require("./Route/classRoute");
const port = process.env.PORT || 8080; //Used in Listening
const app = express();

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// CORS
app.use(cors());

// Loggings MiddleWare using Morgan
app.use(Loggings("dev"));

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Routes
app.use(teacherRoute);
app.use(childRoute);
app.use(classRoute);

// Not Found MW
app.use((request, response) => {
  console.log("Not Found");
  response.status(404).json({
    message: "Not Found",
  });
});

// Error MW
app.use((error, request, response, next) => {
  response.status(500).json({ message: error + "" });
});
