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
const cors = require('cors');
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