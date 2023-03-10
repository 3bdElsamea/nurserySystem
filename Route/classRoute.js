const express = require("express");
const classController = require("../Controller/classController.js");
const validateMW = require("../Core/Validation/validateMW");
const validateClass = require("../Core/Validation/validateClass.js");
const validateParam = require("./../Core/Validation/paramValidation");
const { checkAdmin } = require("./../Core/Authentication/authenticationMW");

const router = express.Router();

// All
router
  .route("/class")
  .all(checkAdmin)
  .get(classController.getAllClasses)
  .post(validateClass.validateClassArray, validateMW, classController.addClass)
  .patch(validateClass.optValidateClassArray, validateMW, classController.updateClass)
  .delete(validateClass.optValidateClassArray, validateMW, classController.deleteClass);

// Get & Delete Class by id
router
  .route("/class/:id")
  .all(checkAdmin)
  .get(validateParam.validateParamInteger, validateMW, classController.getClassById)
  .delete(validateParam.validateParamInteger, validateMW, classController.deleteClass);

// Get class Children
router.get("/classChildern/:id", checkAdmin, validateParam.validateParamInteger, validateMW, classController.getClassChildren);

// Get class Supervisor
router.get("/classTeacher/:id", checkAdmin, validateParam.validateParamObjectId, validateMW, classController.getClassSupervisor);
module.exports = router;
