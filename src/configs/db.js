const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  // process.env.URL
  "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/bigBasket?retryWrites=true&w=majority"
  // "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/bigBasket?retryWrites=true&w=majority"
);
};
module.exports=connect;


