const Booking = require('../models/booking')
const ErrorHandlers =  require ("../utils/errorHandlers")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const router = require('../routes/auth')



//post the booking request

exports.newBooking = catchAsyncErrors(async(req,res) => {

    
    
    
    const booking = await Booking.create(
        req.body
        )       
        
      
    res.status(200).json({
            success:true,
            booking
        })
        //const { name, contact,address,sdate,edate } = req.body;
    
        // if (!name ||contact || !address ||  !sdate || !edate) {
       //     return res.status(422).json({ error: "please fill required blanks" })
       // }
    
       // try{
           
       //     const booking = new Booking({ name, contact,address,sdate,edate });
       
       //     await booking.save();
    
       // }catch(err)
       // {
       //     console.log(err)
       // }
        
})
