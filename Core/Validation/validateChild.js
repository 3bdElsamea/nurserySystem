const { body } = require("express-validator");
// _id(Number), fullName, age , level (PreKG,KG1,KG2), address(city,street and building)
exports.validateChildArray = [
  // body("_id").isInt().withMessage("Child ID must be an Integer"),
  body("fullName").isString().withMessage("Child Full Name must be a String"),
  body("age").isInt().withMessage("Child Age must be an Integer"),
  body("level").isIn(["PreKG", "KG1", "KG2"]).withMessage("Child Level must be a String"),
  body("address").isObject().withMessage("Address must be an Object"),
  body("address.city").isString().withMessage("Child Address City must be a String"),
  body("address.street").isString().withMessage("Child Address Street must be a String"),
  body("address.building").isInt().withMessage("Child Address Building must be an Integer"),
];

exports.optValidateChildArray = [
  body("_id").isInt().withMessage("Child ID must be an Integer"),
  body("fullName").optional().isString().withMessage("Child Full Name must be a String"),
  body("age").optional().isInt().withMessage("Child Age must be an Integer"),
  body("level").optional().isIn(["PreKG", "KG1", "KG2"]).withMessage("Child Level must be a String"),
  body("addrees").optional().isObject().withMessage("Address must be an Object"),
  body("address.city").optional().isString().withMessage("Child Address City must be a String"),
  body("address.street").optional().isString().withMessage("Child Address Street must be a String"),
  body("address.building").optional().isInt().withMessage("Child Address Building must be a String"),
];
