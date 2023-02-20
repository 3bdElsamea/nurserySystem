const express = require("express");
const teacherController = require("./../Controller/teacherController");
const validateMW = require("./../Core/Validation/validateMW");
const validateTeacherArray = require("./../Core/Validation/validateTeacher");
const optValidateTeacherArray = require("../Core/Validation/optValidateTeacher.js");
const router = express.Router();
// All
router
  .route("/teachers")
  .get(validateTeacherArray, validateMW, teacherController.getAllTeachers)
  .post(validateTeacherArray, validateMW, teacherController.addTeacher)
  .patch(optValidateTeacherArray, validateMW, teacherController.updateTeacher)
  .delete(optValidateTeacherArray, validateMW, teacherController.deleteTeacher);

module.exports = router;
