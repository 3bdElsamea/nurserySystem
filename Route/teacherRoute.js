const express = require("express");
const teacherController = require("./../Controller/teacherController");
const validateMW = require("./../Core/Validation/validateMW");
const validateTeacher = require("./../Core/Validation/validateTeacher");
const validateParam = require("./../Core/Validation/paramValidation");
const { checkAdmin, checkAdminAndTeacher } = require("./../Core/Authentication/authenticationMW");
const router = express.Router();
// All
router
  .route("/teachers")
  .get(checkAdmin, teacherController.getAllTeachers)
  .post(checkAdmin, validateTeacher.validateTeacherArray, validateMW, teacherController.addTeacher)
  .patch(checkAdminAndTeacher, validateTeacher.optValidateTeacherArray, validateMW, teacherController.updateTeacher)
  .delete(checkAdmin, validateTeacher.optValidateTeacherArray, validateMW, teacherController.deleteTeacher);

//   Delete by Id
// router.delete("/teachers/:id", validateParam.validateParamObjectId, validateMW, teacherController.deleteTeacher);

module.exports = router;
