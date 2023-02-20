// Get all Classes
exports.getAllClasses = (req, res) => {
  res.status(200).json({
    classes: [],
  });
};

// Get Class by id
exports.getClassById = (req, res) => {
  res.status(200).json({
    class: {},
  });
};

// Add a Class
exports.addClass = (req, res) => {
  res.status(201).json({
    class: "Added",
  });
};

//Update a Class
exports.updateClass = (req, res) => {
  res.status(200).json({
    class: "Updated",
  });
};

// Delete a Class
exports.deleteClass = (req, res) => {
    res.status(200).json({
        class: "Deleted",
    });
};

// Get class Children
exports.getClassChildren = (req, res) => {
  res.status(200).json({
    classChildren: [],
  });
};

// Get class Supervisor
exports.getClassSupervisor = (req, res) => {
  res.status(200).json({
    classSupervisor: {},
  });
};
