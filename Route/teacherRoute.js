const express = require("express");
const teacherController = require("./../Controller/teacherController");
const validateMW = require("./../Core/Validation/validateMW");
const validateTeacher = require("./../Core/Validation/validateTeacher");
const validateParam = require("./../Core/Validation/paramValidation");
const router = express.Router();
// All
router
  .route("/teachers")
  .get(teacherController.getAllTeachers)
  .post(validateTeacher.validateTeacherArray, validateMW, teacherController.addTeacher)
  .patch(validateTeacher.optValidateTeacherArray, validateMW, teacherController.updateTeacher);

//   Delete by Id
router.delete("/teachers/:id", validateParam.validateParamObjectId, validateMW, teacherController.deleteTeacher);

module.exports = router;
