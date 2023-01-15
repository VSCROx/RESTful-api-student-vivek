const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/students-api", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Connection is successful");
}).catch((e)=>{
    console.log(e);
    console.log("No connection");
})