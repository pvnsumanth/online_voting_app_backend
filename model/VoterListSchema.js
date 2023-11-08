const mongoose=require("mongoose");
const VoterListSchema=new mongoose.Schema({
    "name":{type:String},
    "Id":{type:String},
    "PhoneNumber":{type:String},
    "Address":{type:String},
    "DateOfBirth":{type:String},
    "Gender":{type:String},
},{
    collection:"VoterList"
})

module.exports=mongoose.model("VoterListSchema",VoterListSchema);


module.exports=mongoose.model("VoterListSchema",VoterListSchema);