const mongoose = require("mongoose");

const razorPaySchema = new mongoose.Schema(
  {
    paymentid: { type: String, required: true },
    id: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("razorPay", razorPaySchema);
