console.log("Web Server boshlash");
const express = require("express");
const app = express() ;
const fs =require("fs");

let user;
fs.readFile("database/user.json","utf8",(err,data)=>{
    if(err){
        console.log("ERROR: ", err);
    }else{
        user =JSON.parse(data);
    }
});

//Mongo DB chaqirish
const db = require("./server").db();



// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());// kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use(express.urlencoded({extended:true})); //html forumdan request qiladi 

//2 Session

//3 BSSR -backend serverside render  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine","ejs");

//4 routerlarga moljallangan  ,Routin codlar


app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    // console.log(req.body);
    const new_reja =req.body.reja;
    db.collection("plans").insertOne({reja:new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.end('successfully added');
        }
    });
  
    // res.end("success");
    // TODO: code with db here
});

app.get("/author",function(req,res){
    res.render("author",{user:user})
});

app.get("/",function(req,res){
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) =>{
        if(err) {
            console.log(err);
            res.end("something went wrong");
            
        } else {
            console.log(data);
            res.render("reja", {items: data}); 
        }
    });
    // res.render("reja")
});
  

module.exports = app;