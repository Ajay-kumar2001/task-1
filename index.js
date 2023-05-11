const express=require("express")
const mongoose=require("mongoose")
const app=express()
//midleware for json data
app.use(express.json());
let rout=require("./ROOTS/userRoots")
app.use("/api",rout)
// mongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/items").then(()=>{console.log("DataBase is connected")}).catch(()=>{console.log("Not connected")})
app.listen(5001,()=>{console.log("server is running.....")})