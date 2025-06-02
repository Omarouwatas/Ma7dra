const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role : {
        type: String,
        enum: ['Tlmi4','Mou3alima'],
        required: true,
    },
    name : String,
    email : {type:String,unique:true},
    phone :String,
    password : String,
    description : String,
    location :{
        type:{
            type:String,
            enum:['point'],
            default:'point'
        },
        coordinates:{
            type:[Number],
            index:'2dsphere'
        }
    },
    availableTimes :[{
        day:String,
        from:String,
        to:String
    }],
    certificats :[{
        type: String,
        enum : ['Ijaza Warsh', 'Ijaza Qalun', 'Ijaza Hafs', 'Hadith', 'Fiqh']
    }],
    teachingLocation:{
        type :String,
        enum:['Maison','Ma7dra']
    },
    pricePerCourse : Number,
});
module.exports = mongoose.model('User', userSchema);