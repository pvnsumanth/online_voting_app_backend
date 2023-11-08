const express=require("express");
const VoterListSchema=require("../model/VoterListSchema");
const VoterListRoute=express.Router();
const mongoose=require("mongoose");

//To Read the Data
VoterListRoute.get("/",(req,res)=>{
    VoterListSchema.find((err,data)=>{
        if (err) {
            return err;
        } else {
            res.json(data);
        }
    })
})

//To add the Data to database

VoterListRoute.post("/AddVoter",(req,res)=>{
    VoterListSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

//To update the Data

VoterListRoute.route("/update-Voter/:id")
.get((req,res)=>{
    VoterListSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    VoterListSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

VoterListRoute.route("/get-voter/:id")
.get((req,res)=>{
    VoterListSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//To delete Voter

VoterListRoute.delete("/delete-Voter/:id",(req,res)=>{
    VoterListSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//Count

VoterListRoute.get('/Voters-count', (req, res) => {
    VoterListSchema.countDocuments({}, (err, count) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while counting admin documents.' });
      }
      res.json({ count });
    });
  });

module.exports=VoterListRoute;