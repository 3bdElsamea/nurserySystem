const { body } = require("express-validator");

// Validate teacher data "optional " for update
module.exports = [
  body("_id").isMongoId().withMessage("Teacher ID must be an ObjectID"),
  body("fullName").optional().isString().withMessage("Teacher Full Name must be a String"),
  body("password").optional().isLength({ min: 4 }).withMessage("Teacher Password must be a more than 4 elements"),
  body("email").optional().isEmail().withMessage("Teacher Email must be a valid Email"),
  body("image").optional().isString().withMessage("Teacher Image must be a String"),
];
