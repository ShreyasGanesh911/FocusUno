const connectMdb = require('./Mongo.js'); // data base connection
const auth = require('./Auth.js')
const user = require('./Module/user.js'); // UserSchema
const bcrypt = require('bcrypt');         // Bcrypt 
const jwt = require('jsonwebtoken');    //JsonWebToken
const notes = require('./Module/notes.js'); // UserSchema
const express = require('express');       // express connection
const { query, validationResult } = require('express-validator'); // Validation
const cookieParser = require('cookie-parser')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(cookieParser())
// jsons 5000
app.use(express.json()); // for getting data in json format
connectMdb();
//Test
app.post('/signup',async(req,res)=>{
    
    let User = await user.findOne({email:req.body.email});
    if(User){
        success=false
        exist=true
        res.status(400).json({success,exist,error:"User doesnt exist"})
        return
    }
    let salt = await bcrypt.genSalt(10);
    let userPassword = await bcrypt.hash(req.body.password,salt)
     User=await user.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:userPassword,
    })
    const data ={
        user:{
            id:User.id
        }
       }
    success=true
    const authToken = data;
      
   // res.json({ success,authToken})
    
    res.json({
        success,authToken,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:userPassword,
    })
})

//Login
app.post("/login",async(req,res)=>{
    let User = await user.findOne({email:req.body.email})
    if(User===null)
    {
        success= false
        res.status(400).json({success,error:"User doesnt exist"})
       
        return
    }

//let result = (req.body.password===User.password);
    let result = await bcrypt.compare(req.body.password,User.password)
    if(result){
       /* res.cookie('tkn',User._id)*/
       const data ={
        user:{
            id:User.id
        }
       }
       success= true
       const authToken = data;
      
       res.json({ success,authToken})
   
    }
    else{
        success= false
        res.status(400).json({success,error:"User doesnt exist"})
       
        return
    }
    
})

// About users
    app.get('/aboutUser',auth,async(req,res)=>{
    let info = await user.findById(data).select("-password",)
    
    res.json(info)
    })

// Get all notes 

    app.get('/userNotes',auth,async(req,res)=>{
    try{let allNotes = await notes.find({user:data})
    res.json(allNotes)}catch(e){
        console.error(e.message);
        res.status(500).send("Internal Server Error");
    }
    
})
//new note adding
    app.post('/newNotes',auth, async(req,res)=>{
    
    let User = await user.findById(data)
   
    await notes.create({
        user:data,
        title:req.body.title,
        description:req.body.description
    })
    res.json({
        'done':"yes"})
})

// delete note
    app.delete('/delete/:id',auth, async(req,res)=>{
    let note = await notes.findById(req.params.id);
   
    if(!note){return res.status(404).send("Not found")}
    if(note.user.toString()!==data){
        return res.status(401).send("not allowed")
    }
    note = await notes.findByIdAndDelete(req.params.id);
    res.json({
        "status":"Deleted"
    })
})

app.listen(9000,()=>{
    console.log("Active at port 9000")
})


    