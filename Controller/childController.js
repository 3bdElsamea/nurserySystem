// Get all Children
exports.getAllChildren = (req, res) => {
  res.status(200).json({
    children: [],
  });
};

// Get Child by id
exports.getChildById = (req, res) => {
  res.status(200).json({
    child: {},
  });
};

// Add a Child
exports.addChild = (req, res) => {
  res.status(201).json({
    child: "Added",
  });
};

//Update a Child
exports.updateChild = (req, res) => {
  res.status(200).json({
    child: "Updated",
  });
};

// Delete a Child
exports.deleteChild = (req, res) => {
  res.status(200).json({
    child: "Deleted",
  });
};
