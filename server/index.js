const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleware = require ('./middlewares/errors')
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const profileRoute = require ("./routes/profile")
const bookingRoute = require('./routes/booking')
const User=require("./models/businessSchema")
const cors = require('cors');
const bodyParser = require("body-parser");



dotenv.config();


const PORT = process.env.PORT;

require('./db/conn');

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true}));

//business register login and logout
app.post('/api/auth/businessRegister',async(req,res)=>{

    console.log(req.body)

    try {
        await User.create({
            vendortype:req.body.vendortype,
            name:req.body.name,
            email:req.body.email,
            brandname:req.body.brandname,
            address:req.body.address,
            des:req.body.des,
            price:req.body.price,
            city:req.body.city,
            number:req.body.number,
            password:req.body.passwor
        
        })
        res.json({status:'ok'})
    } catch (error) {
        res.json({status:'error',error:'email exists'})
    }
    
})
app.post('/api/auth/signin',async(req,res)=>{

    
    //console.log(req.body)

    
       const user=await User.findOne({
            
           
            email:req.body.email,
           
            password:req.body.password,


        })

        if(user){
            return res.json({status:'ok',user:true})
        }
        else{
            return res.json({status:'error',user:false})
        }
        
})

//seller logout

app.get("/logout", async (req,res) =>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"user logged out"
    })
})


//Import all the routes

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/p1",profileRoute);
app.use("/api/b1",bookingRoute)

//Middleware to handle errors
app.use(errorMiddleware);


app.listen( process.env.PORT ,() => {
    console.log(`backend server is running at ${PORT} in ${process.env.NODE_ENV} mode` );
})