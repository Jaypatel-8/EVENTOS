const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:[true,'please enter your shop name'],
        trim:true,
        maxlength:[100,'Name cannot be more than 100 character ']
    },
    price:{
        type:Number,
        required:true
    },
    description : {
        type: String,
        required:[true,'please enter description of your service'],
    },
    ratings:{
        type:Number,
        default:0
    },
    phone:{
        type:Number,
    },
    location:{
        type:String,
    },
    availability:{
        type:String,
    },
    // images:[
    //     {
    //         public_id: {
    //             type:String,
    //             required:true
    //         },
    //         url: {
    //             type:String,
    //             required:true
    //         },
    //     }
    // ],

    category:{
        type:String,
        required:[true,'please select category for this profile'],
        enum: {
            values:[
                'Photographers',
                'Venues',
                'Food & Caterers',
                'Decorators',
                "DJ's & Music",
                'Clothing',
                'Mehndi',
                'Jewellery '

            ],
            message:'please select correct category for profile'
        }
    },
    reviews: [
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
     
},
{ timestamps: true }

)


module.exports = mongoose.model('profile',ProfileSchema); 