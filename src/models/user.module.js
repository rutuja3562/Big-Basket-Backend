const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    brand: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("fruits", userSchema);
// brand:{type:String, required:true},
