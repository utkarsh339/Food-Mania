const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://food-Mania:98891Ut@cluster0.gssc09w.mongodb.net/foodMania?retryWrites=true&w=majority';

const mongoDB = async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err)=>{
    if(err) console.log(error)
    else{
      console.log("connected");
      const fetched_data= await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function(err, data){
        const foodCategory=  mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catData){
          if(err) console.log(err)
          else{
            global.food_items=data;
            global.foodCategory=catData;
          }
        })
        // if(err) console.log(err)
        // else{
        //     global.food_items=data;
            
        // }
      })
    }
  })
}
module.exports = mongoDB;

