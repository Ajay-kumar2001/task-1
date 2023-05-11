const productData=require("../MODEL/items")
let getProductCon=async(req,res)=>{
    //getting the data  from the data Base 
     var allproducts=await productData.find()
     console.log(allproducts.length)
    //  checking  if data is present or not
     if (!allproducts.length){
     res.json({"error":"data not found"})
    }
    else{
         res.json(allproducts)
    }
}
module.exports=getProductCon