const mongoose = require('mongoose');
const id ='mongodb+srv://shreyasganesh911:focusUno@cluster0.gbvnurn.mongodb.net/'
const param ={useNewUrlParser:true,useUnifiedTopology:true}
const connectMdb =()=>{ 
    try{
        mongoose.connect(id,param).then(()=>{
            console.log("Connected to mongoDb successfully!");
        })
     }catch(error){
        console.log("failed to connect" + error)
     }

}

module.exports = connectMdb;