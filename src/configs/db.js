const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:Rutuatlas3562@cluster0.4soie.mongodb.net/bigBasket?retryWrites=true&w=majority"
);
   
    // return mongoose.connect("mongodb+srv://sumit123:sumit_123@cluster0.s7eel.mongodb.net/bigBasket?retryWrites=true&w=majority")
    // mongodb+srv://Rutu:Rutuatlas3562@cluster0.4soie.mongodb.net/test
};
module.exports=connect;


