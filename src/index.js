const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();

const port=process.env.PORT||7005

app.use(express.json())
app.use(cors());

const vegetableController = require("./controller/vegetable.controller")
const vegetableCartController = require("./controller/vegetablecart.controller")
// const payment = require("./paymentRozerpay");
const payment=require("./paymentRazorpay")

app.use("/logo", payment);
app.use("/razorpay", payment);
app.use("/vegetables", vegetableController);
app.use("/vegetablecart",vegetableCartController)

app.listen(port, async () => {
    try {
        await connect();
        console.log("listing on port 7005")
    } catch (err) {
        console.log(err.message);
    }

})