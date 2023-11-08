const mongoose=require("mongoose");
const AdminsSchema=new mongoose.Schema({
    "name":{type:String},
    "username":{type:String},
    "phonenumber":{type:String},
    "email":{type:String},
    "address":{type:String},
    "password":{type:String},
},{
    collection:"Admins"
})
module.exports=mongoose.model("AdminsSchema",AdminsSchema);