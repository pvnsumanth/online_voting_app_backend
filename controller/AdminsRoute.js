const express=require("express");
const AdminsSchema=require("../model/AdminsSchema");
const AdminsRoute=express.Router();
const mongoose=require("mongoose");


AdminsRoute.get("/",(req,res)=>{
    AdminsSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})


AdminsRoute.route("/get-admin/:id")
.get((req,res)=>{
    AdminsSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

AdminsRoute.post("/AddAdmin",(req,res)=>{
    AdminsSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})
AdminsRoute.route("/update-Admin/:id")
.get((req,res)=>{
    AdminsSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    AdminsSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


//To delete Voter

AdminsRoute.delete("/delete-Admin/:id",(req,res)=>{
    AdminsSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
module.exports=AdminsRoute;