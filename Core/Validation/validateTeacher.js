const { body } = require("express-validator");
// Validate teacher data(objectId, fullName,email,image'String')
module.exports = [
  body("_id").isMongoId().withMessage("Teacher ID must be an ObjectID"),
  body("fullName").isString().withMessage("Teacher Full Name must be a String"),
  body("password").isLength({min:4}).withMessage("Teacher Password must be a more than 4 elements"),
  body("email").isEmail().withMessage("Teacher Email must be a valid Email"),
  body("image").isString().withMessage("Teacher Image must be a String"),
];
