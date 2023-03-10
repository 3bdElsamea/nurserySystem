const mongoose = require("mongoose");
require("./../Model/classModel");

const classSchema = mongoose.model("class");
const teachersSchema = mongoose.model("teachers");
const childsSchema = mongoose.model("childs");

// Get all Classes
exports.getAllClasses = (req, res, next) => {
  classSchema
    .find({})
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => next(err));
};

// Get Class by id
exports.getClassById = (req, res, next) => {
  classSchema
    .findOne({ _id: req.params.id })
    .then((data) => {
      if (data == null) {
        throw new Error("Class not Found");
      } else {
        res.status(200).json({ data });
      }
    })
    .catch((err) => next(err));
};

// Add a Class
exports.addClass = (req, res, next) => {
  teachersSchema
    .findOne({ _id: req.body.supervisor }, { _id: 1 })
    .then((data) => {
      if (data == null) {
        throw new Error("Supervisor not Found");
      } else {
        return childsSchema.find({ _id: { $in: req.body.children } });
      }
    })
    .then((data) => {
      console.log(data);

      data = data.map((obj) => Number(obj._id));
      req.body.children = req.body.children.map((_id) => Number(_id));
      req.body.children = [...new Set(req.body.children)]; //Set dosen't allow duplicates

      console.log(data);
      console.log(req.body.children);

      if (data.length != req.body.children.length) {
        throw new Error("Some Children not Found");
      } else {
        return new classSchema({
          name: req.body.name,
          supervisor: req.body.supervisor,
          children: req.body.children,
        }).save();
      }
    })
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => next(err));
};

//Update a Class
exports.updateClass = (req, res, next) => {
  teachersSchema
    .findOne({ _id: req.body.supervisor }, { _id: 1 })
    .then((data) => {
      if (data == null) {
        throw new Error("Supervisor not Found");
      } else {
        return childsSchema.find({ _id: { $in: req.body.children } });
      }
    })
    .then((data) => {
      data = data.map((obj) => Number(obj._id));
      req.body.children = req.body.children.map((_id) => Number(_id));
      req.body.children = [...new Set(req.body.children)];
      if (data.length != req.body.children.length) {
        throw new Error("Some Children not Found");
      } else {
        return classSchema.updateOne(
          { _id: req.body._id },
          {
            $set: {
              name: req.body.name,
              supervisor: req.body.supervisor,
              children: req.body.children,
            },
          }
        );
      }
    })
    .then((data) => {
      if (data.matchedCount == 0) {
        throw new Error("Class not Found");
      } else {
        res.status(200).json({ data });
      }
    })
    .catch((err) => next(err));
};

// Delete a Class
exports.deleteClass = (req, res, next) => {
  classSchema
    .deleteOne({ _id: req.body._id })
    .then((data) => {
      if (data.deletedCount == 0) {
        throw new Error("Class not Found");
      } else {
        res.status(200).json({ data });
      }
    })
    .catch((err) => next(err));
};

// Get class Children
exports.getClassChildren = (req, res, next) => {
  classSchema
    .findOne({ _id: req.params.id }, { children: 1 })
    .populate({ path: "children", select: { fullName: 1 } })
    .then((data) => {
      if (data == null) {
        throw new Error("Class dosen't Exist");
      } else {
        res.status(200).json({ data });
      }
    })
    .catch((err) => next(err));
};

// Get class Supervisor
exports.getClassSupervisor = (req, res, next) => {
  classSchema
    .findOne({ _id: req.params.id }, { supervisor: 1 })
    .populate({ path: "teachers" }, { select: { fullName: 1 } })
    .then((data) => {
      if (data == null) {
        throw new Error("Class dosen't Exist");
      } else {
        res.status(200).json({ data });
      }
    })
    .catch((err) => next(err));
};
