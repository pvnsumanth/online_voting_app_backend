const express=require("express");
const PartiesSchema=require("../model/PartiesSchema");
const PartiesRoute=express.Router();
const mongoose=require("mongoose");

//To Read the Data
PartiesRoute.get("/",(req,res)=>{
    PartiesSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})


//To add the Data to database

PartiesRoute.post("/AddParty",(req,res)=>{
    PartiesSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

//To update the Data

PartiesRoute.route("/update-Party/:id")
.get((req,res)=>{
    PartiesSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    PartiesSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


//To delete Voter

PartiesRoute.delete("/delete-Party/:id",(req,res)=>{
    PartiesSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//count

PartiesRoute.get('/Parties-count', (req, res) => {
    PartiesSchema.countDocuments({}, (err, count) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while counting admin documents.' });
      }
      res.json({ count });
    });
  });

module.exports=PartiesRoute;