const mongoose = require ('mongoose')

const bookingSchema = mongoose.Schema({

    name:{
        type:String,
        require:[true,'Enter your Name ']
    },
    date:{
        type:Date,
        require:[true,"Enter Date on when is ur event is going to be happpen"]
    },
    place:{
        type:String,
        require:true
    },
    event:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('booking',bookingSchema)