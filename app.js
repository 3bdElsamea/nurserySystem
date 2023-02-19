const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// CORS
const cors = require("cors");
app.use(cors());

// Loggings MiddleWare using Morgan
const Loggings = require("morgan");
app.use(Loggings("dev"));

// Authintication MW
app.use((request, response, next) => {
  if (true) {
    next();
  } else {
    // Throw Error
    next("Not Authenticated");
  }
});

// Routes

// Not Found MW
app.use((request, response) => {
  response.status(404).json({
    message: "Not Found",
  });
});

// Error MW
app.use((error, request, response, next) => {
  response.status(500).json({ message: error + "" });
});
