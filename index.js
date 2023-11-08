const express=require("express")
const mongoose=require("mongoose");
const app=express()

const bodyParser=require("body-parser");
const cors=require("cors");

const PartiesRoute=require("./controller/PartiesRoute");
const VoterListRoute=require("./controller/VoterListRoute");
const IsVotedRoute=require("./controller/IsVotedRoute");
const AdminsRoute=require("./controller/AdminsRoute");

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://sumanth:211797@cluster0.tk9kjew.mongodb.net/OnlineVotingSystem");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/PartiesRoute",PartiesRoute);
app.use("/VoterListRoute",VoterListRoute);
app.use("/IsVotedRoute",IsVotedRoute);
app.use("/AdminsRoute",AdminsRoute);

app.listen(3000,()=>{
    console.log("Server Started at 3000");
})