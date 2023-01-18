const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log("No connection");
    // console.log(err);
})