const express = require("express");

// require("dotenv").config();
// const router = express.Router();

// const shortid = require("shortid");
// const Razorpay = require("razorpay");

// const razorpay = new Razorpay({
//   key_id: "rzp_test_Mg2MeEGX1Eyeh2",
//   key_secret: "73FnKAwKjspj3HLURbijmTGi",
// });

// router.get("", (req, res) => {
//   res.sendFile(path.join(__dirname, "paymentlogo.jpg"));
// });

// router.post("", async (req, res) => {
//   const payment_capture = 1;
//   //   const amount = req.query.price;
//   const amount = 499;
//   const currency = "INR";

//   const options = {
//     amount: amount * 100,
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//   };

//   try {
//     const response = await razorpay.orders.create(options);
//     console.log("LL", response);
//     res.json({
//       id: response.id,
//       currency: response.currency,
//       amount: response.amount,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;const express = require("express");
// const path = require("path");
require("dotenv").config();
const router=express.Router()


const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  // key_id: process.env.KEY_ID,
  // key_secret: process.env.SECRET_KEY,
  key_id: "rzp_test_Mg2MeEGX1Eyeh2",
    key_secret: "73FnKAwKjspj3HLURbijmTGi",
});

// Serving company logo


router.post("", async (req, res) => {            ////////razorpay
  console.log(req.query.price)
  const payment_capture = 1;
  const amount = req.query.price;
  const currency = "INR";

  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log("responce",response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

