// ADD EXPRESS ROUTER IN RESTFUL API

const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);
app.use(userRouter);


app.listen(port, ()=>{
    console.log(`Connection is setup at ${port}`);
})