const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://Rutu:Rsp3562@cluster0.4soie.mongodb.net/bigBasket?retryWrites=true&w=majority");
};
module.exports = connect;
