const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        
    },
    title:{
        type:String,
        
    },
    
    description:{
        type:String
        
        
    },
    

})

const notes = mongoose.model('Notebook/notes',noteSchema);
module.exports = notes;