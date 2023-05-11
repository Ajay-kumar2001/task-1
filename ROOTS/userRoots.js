const express=require("express")
const getProductCon = require("../CONTROLLERS/getProductCon")
const postProduct = require("../CONTROLLERS/postProduct")
var routs=express.Router()
routs.post("/addproduct",postProduct)
routs.get("/getproduct",getProductCon)
 module.exports =routs