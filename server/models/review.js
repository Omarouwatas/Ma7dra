const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    teacher :{type : mongoose.Schema.Types.ObjectId ,ref:'User'},
    student :{type : mongoose.Schema.Types.ObjectId ,ref:'User'},
    rating :{type:Number,min:1,max:5},
    comment : String,
    createdAt : {
        type : Date,
        default : Date.now
    }

})