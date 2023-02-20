// Get all Teachers
exports.getAllTeachers = (req, res) => {
  res.status(200).json({
    teachers: [],
  });
};

// Add a Teacher
exports.addTeacher = (req, res) => {
  res.status(201).json({
    teacher: "Added",
  });
};

//Update a Teacher
exports.updateTeacher = (req, res) => {
  res.status(200).json({
    teacher: "Updated",
  });
};

// Delete a Teacher
exports.deleteTeacher = (req, res) => {
  res.status(200).json({
    teacher: "Deleted",
  });
};
