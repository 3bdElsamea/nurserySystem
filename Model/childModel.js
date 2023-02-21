let mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

// Child Schema
let childSchema = new mongoose.Schema({
  _id: Number,
  fullName: {
    type: String,
    required: [true, "Please Enter Child Name"],
  },
  age: Number,
  level: String,
  address: {
    city: {
      type: String,
      required: [true, "Please Enter Child City"],
    },
    street: {
      type: String,
      required: [true, "Please Enter Child Street"],
    },
    building: {
      type: Number,
      required: [true, "Please Enter Child Building"],
    },
  },
});

// Auto Increment
childSchema.plugin(autoIncrement, { id: "childId", inc_field: "_id" });

// childSchema.plugin(autoIncrement.plugin, {
//   model: "childs",
//   field: "_id",
//   startAt: 1,
//   incrementBy: 1,
// });

// Mapping Schema to Model
mongoose.model("childs", childSchema);
