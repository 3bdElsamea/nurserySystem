let mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

// Class Schema
let classSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Please Enter Class Name"],
  },

  supervisor: {
    ref: "teachers",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please Enter Class Supervisor"],
  },
  children: [
    {
      ref: "childs",
      type: Number,
      required: [true, "Please Enter Class Children"],
    },
  ],
});
//Auto Increment
classSchema.plugin(autoIncrement, { id: "classId", inc_field: "_id" });

// Mapping Schema to Model
mongoose.model("class", classSchema);
