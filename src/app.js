console.log("Starting a new project");

const express = require("express");
const app =express();
app.use("/user",(req, res, next)=>{
    //Route Handler
    console.log("Handling the route user 1!!")
    next();
    //res.send("Route handler 1")
    
},
  (req, res)=>{
    console.log("Handling the route user 2!!")
    res.send("Route handler 2")

  }
);
app.listen(3000,()=>{
    console.log("Server is succesfully listening on port 3000.......");
});