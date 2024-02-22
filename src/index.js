const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const path =require("path")
const app = express();

const port=process.env.PORT||7505

app.use(express.json())
app.use(cors());

const userController = require("./controller/user.controller")
const vegetableController = require("./controller/vegetable.controller")
const vegetableCartController = require("./controller/vegetablecart.controller")
 const payment = require("./paymentRazorpay")
 const razorPayController = require("./controller/Pay.controller")
 const {register,login, generateToken} = require("./controller/auth.controller")

app.get("/logo", (req, res) => {
  res.sendFile(path.join(__dirname, "pay.jpg"));
});

app.use("/users", userController)
app.post("/register", register)
app.post("/login", login);
app.use("/razorpay", payment);
app.use("/rasor", razorPayController);
app.use("/vegetables", vegetableController);
app.use("/vegetablecart",vegetableCartController)

app.listen(port, async () => {
    try {
        await connect();
        console.log("listing on port 7005")
    } catch (err) {
        console.log("EEEE")
        console.log(err.message);
    }

})