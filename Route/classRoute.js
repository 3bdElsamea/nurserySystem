const express = require("express");
const classController = require("../Controller/classController.js");
const validateMW = require("../Core/Validation/validateMW");
const validateClass = require("../Core/Validation/validateClass.js");

const { param } = require("express-validator");

const router = express.Router();

// All
router
  .route("/class")
  .get(classController.getAllClasses)
  .post(validateClass.validateClassArray, validateMW, classController.addClass)
  .patch(validateClass.optValidateClassArray, validateMW, classController.updateClass)
  .delete(validateClass.optValidateClassArray, validateMW, classController.deleteClass);

// Get Class by id
router.get("/class/:id", [param("_id").isInt().withMessage(" ID must be an Integer")], validateMW, classController.getClassById);

// Get class Children
router.get("/classChildern/:id", [param("_id").isMongoId().withMessage(" ID must be an Integer")], validateMW, classController.getClassChildren);

// Get class Supervisor
router.get("/classTeacher/:id", [param("_id").isInt().withMessage(" ID must be an Integer")], validateMW, classController.getClassSupervisor);
module.exports = router;
