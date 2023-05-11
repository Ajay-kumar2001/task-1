const productData=require("../MODEL/items")

let postProduct= async (req,res)=>{
  //storing the data into the database
   let data=new  productData({...req.body}) 
   await data.save()
   //sending the data as response in  the form of json format
  res.json(req.body);
}
module.exports=postProduct