const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const StudentRouter = require("./routers/students");
const app = express();
const port = process.env.PORT || 8000;
const Admin = require("./routers/admin")
// epress can identify json data which is get to postman

app.use(express.json());

app.use(StudentRouter);

app.get("/", (req,res)=>{
    res.send("Hello in home page");
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})