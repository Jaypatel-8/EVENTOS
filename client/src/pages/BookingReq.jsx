import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles,Box, Typography, Button  } from '@material-ui/core';
//import { Link } from "react-router-dom";
import InfoDialog from "./InfoDialog"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const useStyle = makeStyles({

    mainBox:{
        //border:"2px solid red",
        height:"100vh",
        //width:"100vw"
    },
    innerBox:{
        backgroundColor:"black",
        height:"70vh",
        display:"flex",
        //border:"2px solid red",
        color:"white"
        //flexDirection:"column",
        //justifyContent:"center",
        //alignItems:"center"

    },
    left:{
        width:"40%"
    },
    right:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        marginLeft:"110px"
        //justifyContent:"center",
        //alignItems:"center"
    },
    name:{
       
        color:"white",
    fontSize:"75px",
    marginTop:"55px",
    marginLeft:"0px",
    fontWeight:600
    },
    des:{
        marginTop:"40px",
        //textAlign:"center",
        width:"80%",
        
    },
    priceBox:{
        marginTop:"40px",
        fontSize:"30px"
    },
    city:{
        marginTop:"30px",
        display:"flex"
    },
    title:{
        fontSize:"30px",
        fontWeight:600,
        marginTop:"30px",
        marginLeft:"675px"
    },
    imgs:{
        border:"2px solid black",
        margin:"20px"
    }
});
const BookingReq=()=>{
    const classes = useStyle();
    const [open,setOpen]=useState(false);
    const openDialog=()=>{
        setOpen(true);
    }
    return(<>
    <Navbar/>
        <Box className={classes.mainBox}>
            <Box className={classes.innerBox}>
                <Box className={classes.left}><img src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?cs=srgb&dl=pexels-marcelo-chagas-1854897.jpg&fm=jpg" style={{height:'520px',width:"615px",borderBottomRightRadius:"80%"}}></img></Box>
                <Box className={classes.right}>
                    <Box className={classes.name}>'A'</Box>
                    <Box className={classes.des}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas in nisi assumenda doloremque? Obcaecati non iusto in eius doloremque, natus recusandae error eaque laudantium sunt impedit, minus hic similique ipsa mollitia amet molestiae blanditiis.
                    </Box>
                    <Box className={classes.city}>
                        <LocationOnIcon /><Typography>Mumbai</Typography>
                       
                    </Box>
                    <Box className={classes.priceBox}>
                        PRICE : 0000 rs/day
                    </Box>
                    
                    
                    <Button onClick={()=>openDialog()} style={{backgroundColor:"white",width:"400px",marginTop:"60px"}}>Request A Booking </Button>
                    <InfoDialog open={open} setOpen={setOpen}/>

                </Box>
            </Box>

            <Box className={classes.lowerBox}>
                <Box className={classes.title}>PHOTO GALLERY</Box>
                <Box className={classes.imgs}></Box>
            </Box>
        </Box>
        
        <Footer/>
    </>);
}

export default BookingReq;