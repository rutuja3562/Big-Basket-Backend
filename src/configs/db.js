const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://sumit123:sumit_123@cluster0.s7eel.mongodb.net/bigBasket?retryWrites=true&w=majority")
    
};
module.exports=connect;


