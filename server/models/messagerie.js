const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    from:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    to : {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    Text: String , 
    sentAt:{
        type:Date,
        default:Date.now
    },
    read:{
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('Message',messageSchema);