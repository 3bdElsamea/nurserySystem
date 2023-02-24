const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const teachersSchema = mongoose.model("teachers");

module.exports = (req, res, next) => {
  console.log(req.body);
  if (req.body.fullName == "admin" && req.body.password == "123") {
    let token = jwt.sign({ id: 1, role: "admin" }, process.env.SECRET_KEY, { expiresIn: "12h" });
    res.status(200).json({ message: "Authenticated", token: token });
  } else {
    teachersSchema
      .findOne({ fullName: req.body.fullName, password: req.body.password })
      .then((data) => {
        if (data == null) {
          let err = new Error("Invalid username or password");
          err.status = 401;
          next(err);
        } else {
          // Validate the password
          bcrypt.compare(req.body.password, data.password, (err, result) => {
            if (err) {
              let err = new Error("Invalid username or password");
              err.status = 401;
              next(err);
            } else if (result) {
              let token = jwt.sign({ id: data._id, role: "teacher" }, process.env.SECRET_KEY, { expiresIn: "12h" });
              res.status(200).json({ message: "Authenticated", token: token });
            } else {
              let err = new Error("Invalid username or password");
              err.status = 401;
              next(err);
            }
          });
        }
      })
      .catch((err) => next(err));
  }
};
