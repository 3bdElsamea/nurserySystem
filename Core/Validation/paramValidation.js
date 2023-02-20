const { param } = require("express-validator");

// Integer Validation
exports.validateParamInteger = [param("id").isInt().withMessage(" Must be an Integer")];

// objectId Validation
exports.validateParamObjectId = [param("id").isMongoId().withMessage(" Must be an MongoId")];
