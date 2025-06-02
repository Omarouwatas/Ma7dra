const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    student : {type:mongoose.Schema.Types.ObjectId,ref :'User'},
    teacher : {type:mongoose.Schema.Types.ObjectId,ref : 'User'},
    type :{
        type : String,
        enum :['individuel', 'programme']
    },
    courseType :{
        type : String,
        enum: ['Tajwid', 'Hifdh', 'Mouraja3a', 'Tafsir', 'Fiqh', 'Hadith', 'Autre']
    },
    date : Date,
    duration : {
        heure : String,
        minute : String
    },
    status :{
        type:String,
        enum :['En attente','Confirmé','Terminé'],
        default : 'En attente'
    },
    price : Number,
    MaxStudents : Number
});

module.exports = mongoose.model('Course', courseSchema);