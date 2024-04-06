const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://priyansh28:Priyansh28@cluster0.cy8r8rs.mongodb.net/Fruits");
const fruitSchema= new mongoose.Schema({
    name:{
       type: String,
       required: [true, "Please check your data entry, there is no name field specified"]
    
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
})

const Fruit= mongoose.model("Fruit",fruitSchema);

// const fruit=new Fruit({
//     rating: 8,
//     review:"Mango is so sweet to eat"
// })

const watermelon=new Fruit({
    name: "watermelon",
    rating: 8,
    review:"great fruit"
})

// watermelon.save();

const personSchema= new mongoose.Schema({
    name:String, 
    age: Number,
    favoriteFruit: fruitSchema
})


const Person= mongoose.model("Person",personSchema);

const person= new Person({
   name: "Priyansh",
   age:21,
   favoriteFruit: watermelon
}) 

person.save();


// const orange=new Fruit({
//     name: "Orange",
//     rating: 8,
//     review:"Quite sour in taste."
// })

// const grapes=new Fruit({
//     name: "grapes",
//     rating: 10,
//     review:"good for summers."
// })


// Fruit.insertMany([orange, grapes])
//     .then(function () {
//         console.log("Successfully saved defult items to DB");
//       })
//       .catch(function (err) {
//         console.log(err);
//       }
// )

// Fruit.find()
//     .then(function (fruits) {
//         fruits.forEach(fruit => {
            
//             console.log(fruit.name);
            
//         });
//         mongoose.connection.close();
//       })
//       .catch(function (err) {
//         console.log(err);
//       }
// )

// Fruit.updateOne({ _id: "64237313c5e4989843132119"},{name: "Mango"})
// .then(function () {
//             console.log("Successfully updated name.");
//           })
//           .catch(function (err) {
//             console.log(err);
//           }
// )

// Fruit.deleteOne({name: "Mango"})
// .then(function () {
//             console.log("Successfully deleted ");
//           })
//           .catch(function (err) {
//             console.log(err);
//           }
// )