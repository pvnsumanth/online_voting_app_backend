const mongoose=require("mongoose");
const PartiesSchema=new mongoose.Schema({
    "PartyName":{type:String},
    "CandidateName":{type:String},
    "Symbol":{type:String},
    "Image":{type:String},
},{
    collection:"Parties"
})

module.exports=mongoose.model("PartiesSchema",PartiesSchema);