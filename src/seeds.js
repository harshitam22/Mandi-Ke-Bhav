const mongoose = require("mongoose");
const Item = require('./models/items');

mongoose.connect("mongodb://127.0.0.1:27017/Registration").then(()=>{
    console.log(`!!Connection Successful`);
}).catch( (e)=>{
console.log(e);
})

// const p = [
// {
//     name : "Apple",
//     description : "",
//     category: "fruit",
//     quantity: 100,
//     image: "css/images/green apple.jpg",
//     previous_rates : "9,9,9,8,8,8",
//     today: 109
// },
// {
//     name : "Banana",
//     description : "",
//     category: "fruit",
//     quantity: 100,
//     image: "css/images/banana.jpg",
//     previous_rates : "26,26,26,31,31,31",
//     today: 37
// },
// {
//     name : "Black Grapes",
//     description : "",
//     category: "fruit",
//     quantity: 100,
//     image: "css/images/black grapes.jpg",
//     previous_rates : "27,27,27,26,26,26",
//     today: 75
// },
// {
//     name : "Cherry",
//     description : "",
//     category: "fruit",
//     quantity: 100,
//     image: "css/images/cherry.jpg",
//     previous_rates : "145,145,145,147,147,147",
//     today: 69
// },
// {
//     name : "Green Grapes",
//     description : "",
//     category: "fruit",
//     quantity: 100,
//     image: "css/images/green grapes.jpg",
//     previous_rates : "11,11,11,10,10,10",
//     today: 66
// },
//]

Item.insertMany(p).then(res => {
    console.log(res);
}).catch((e)=>{
    console.log(e);
})
