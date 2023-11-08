const mongoose=require("mongoose");
const IsVotedSchema=new mongoose.Schema({
    "Id":{type:String},
    "PartyVoted":{type:String},
},{
    collection:"IsVoted"
})

module.exports=mongoose.model("IsVotedSchema",IsVotedSchema);