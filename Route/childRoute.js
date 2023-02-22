const express = require("express");
const childController = require("./../Controller/childController");
const validateMW = require("./../Core/Validation/validateMW");
const validateChild = require("./../Core/Validation/validateChild");
const validateParam = require("./../Core/Validation/paramValidation");

const router = express.Router();
// All
router
  .route("/childs")
  .get(childController.getAllChildren)
  .post(validateChild.validateChildArray, validateMW, childController.addChild)
  .patch(validateChild.optValidateChildArray, validateMW, childController.updateChild)
  .delete(validateChild.optValidateChildArray, validateMW, childController.deleteChild);

// Get & Delete Child by id
router.route("/childs/:id").get(validateParam.validateParamInteger, validateMW, childController.getChildById);

module.exports = router;
