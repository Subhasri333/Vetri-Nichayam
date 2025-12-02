// it behave like an gateway entry point
const express = require("express");
const app = express(); //instance
const PORT = 8000;
const mongoose=require("mongoose");
// const middleware = require("./module/middleware")
const userRoute = require("./routes/userRouters");
app.use(express.json());
app.use(cors())
// mongoose -  which connect the database and the server
const connect = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Students")
        console.log("Connected to DB")
    }catch(error){
        console.error("error connecting")
    }
    
};
connect();

// app.get("/", middleware, (req,res)=>{
//     console.log("It is from Get Route");
//     res.send("Welcome to Database");
// });
app.use("/userRoute",userRoute);
app.listen(PORT, () =>{
    console.log("Server Started at PORT 8000");
});