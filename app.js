const express = require("express");
const app = express();
const port = process.env.PORT || 8080; //Used in Listening
// CORS
const cors = require("cors");
app.use(cors());

// Loggings MiddleWare using Morgan
const Loggings = require("morgan");
app.use(Loggings("dev"));

// Authintication MW
app.use((request, response, next) => {
  if (true) {
    console.log("Authinticated");
    next();
  } else {
    console.log("Not Authinticated");
    // Throw Error
    next(new Error("Not Authenticated"));
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

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
