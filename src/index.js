const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();

app.use(express.json())
app.use(cors());

const userController = require("./controller/user.controller")
const vegetableCartController = require("./controller/vegetablecart.Controller")
app.use("/collection", userController)
app.use("/vegetablecart",vegetableCartController)


app.listen(7005, async () => {
    try {
        await connect();
        console.log("listing on port 7005")
    } catch (err) {
        console.log(err.message);
    }

})