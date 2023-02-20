const { body } = require("express-validator");
//_id(Number), name, supervisor (teacher id number), children which is array of children ids
exports.validateClassArray = [
  body("_id").isInt().withMessage("Class ID must be an Integer"),
  body("name").isString().withMessage("Class Name must be a String"),
  body("supervisor").isMongoId().withMessage("Class Supervisor must be an Integer"),
  body("children").isArray().withMessage("Class Children must be an Array"),
  body("children.*").isInt().withMessage("Class Children must be an Array of Integers"),
];

// Optional
exports.optValidateClassArray = [
  body("_id").isInt().withMessage("Class ID must be an Integer"),
  body("name").optional().isString().withMessage("Class Name must be a String"),
  body("supervisor").optional().isMongoId().withMessage("Class Supervisor must be an Integer"),
  body("children").optional().isArray().withMessage("Class Children must be an Array"),
  body("children.*").optional().isInt().withMessage("Class Children must be an Array of Integers"),
];
