console.log("Starting a new project");

const express = require("express");
const app =express();

app.use("/hello",(req,res)=>{
    res.send("Hello from Server");
});
app.use("/dashboard",(req,res)=>{
    res.send("Hello from dashboard")
});
app.listen(3000,()=>{
    console.log("Server is succesfully listening on port 3000.......");
});