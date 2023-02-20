const express = require("express");
const childController = require("./../Controller/childController");
const validateMW = require("./../Core/Validation/validateMW");
const validateChild = require("./../Core/Validation/validateChild");
// const optValidateChildArray = require("../Core/Validation/optValidateChild.js");
const { param } = require("express-validator");

const router = express.Router();
// All
router
  .route("/childs")
  .get(childController.getAllChildren)
  .post(validateChild.validateChildArray, validateMW, childController.addChild)
  .patch(validateChild.optValidateChildArray, validateMW, childController.updateChild)
  .delete(validateChild.optValidateChildArray, validateMW, childController.deleteChild);

// Get Child by id
router.get("/childs/:id", [param("_id").isInt().withMessage("ID must be an Integer")], validateMW, childController.getChildById);

module.exports = router;
