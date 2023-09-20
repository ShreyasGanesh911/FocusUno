const jwt = require('jsonwebtoken');
const express = require('express')
const user = require('./Module/user.js'); // UserSchema
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const auth = async(req,res,next)=>{
    //let token = await req.cookies.tkn;
    const token = req.header('authToken');
    
    if(!token)
        res.status(401).send({ error: "Login First" })         
    else{
        try{
            let findUser = await user.findById(token);
            if(!findUser)
                res.send("Login first in else")          
            else{
                data = token
                next()     
            }
            }catch(err){
                next()
            }
    }
   
   
}

module.exports = auth;