const mongoose=require("mongoose")
// designing  of schema  
const productSchema=mongoose.Schema({
    product_name:{type:String},
    product_type:{type:String},
    product_colour:{type:String},
    product_description:{type:String}
})
module.exports=mongoose.model("productData",productSchema)