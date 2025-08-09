console.log("Starting a new project");

const express = require("express");
const app =express();

//This will match all the GET method api calls to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"Abhishek", lastName:"Kumar"})

});
app.post("/user",(req,res)=>{
    res.send("Data successfully saved to Database")
})


//This will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Hello from Server");
});
// app.use("/dashboard",(req,res)=>{
//     res.send("Hello from dashboard")
// });
// app.use("/",(req,res)=>{

//     res.send("Hello Mr. Abhishek")
// });
app.listen(3000,()=>{
    console.log("Server is succesfully listening on port 3000.......");
});