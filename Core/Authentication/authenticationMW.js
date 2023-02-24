const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(req.get("authorization"), process.env.SECRET_KEY);
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decodedToken);
    req.id = decodedToken.id;
    req.role = decodedToken.role;
    next();
  } catch (err) {
    let error = new Error("You are not authorized to access this page 1");
    error.status = 401;
    next(error);
  }
};

module.exports.checkAdmin = (req, res, next) => {
  if (req.role == "admin") {
    next();
  } else {
    let err = new Error("You are not authorized to access this page 2");
    err.status = 401;
    next(err);
  }
};

module.exports.checkAdminAndTeacher = (req, res, next) => {
  if (req.role == "admin" || req.role == "teacher") {
    next();
  } else {
    let err = new Error("You are not authorized to access this page 3");
    err.status = 401;
    next(err);
  }
};
