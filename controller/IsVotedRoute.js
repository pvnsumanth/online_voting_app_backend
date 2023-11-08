const express=require("express");
const IsVotedSchema=require("../model/IsVotedSchema");
const IsVotedRoute=express.Router();
const mongoose=require("mongoose");

//To Read the Data
IsVotedRoute.get("/",(req,res)=>{
    IsVotedSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

IsVotedRoute.post("/AddIsvoted",(req,res)=>{
    IsVotedSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

IsVotedRoute.delete("/delete-isvoted/:id",(req,res)=>{
    IsVotedSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

IsVotedRoute.get('/Isvoted-count', (req, res) => {
    IsVotedSchema.countDocuments({}, (err, count) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while counting admin documents.' });
      }
      res.json({ count });
    });
  });


module.exports=IsVotedRoute;