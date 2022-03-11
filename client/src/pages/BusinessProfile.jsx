import React from "react";
import Navbar from "../components/Navbar";
import BusinessNav from "./BusinessNav";
import Footer from "../components/Footer";
import { makeStyles,Box, Typography, Button } from "@material-ui/core";


const useStyle=makeStyles({
    mainBox:{
        display:"flex",
        height:"80vh",
        backgroundColor:"black"
    },
    left:{
        width:'40%',
        color:'white',
        display:"flex",
        flexDirection:"column",
        //backgroundColor:'grey',
        //borderBottomRightRadius:"100%"
    },
    right:{
        color:'white',
        width:"100%",
        display:"flex",
        flexDirection:"column",
        marginLeft:"310px",
        marginTop:"60px"
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
    },
    hbx:{
        display:"flex"
    }
    });
    const BusinessProfile=()=>{
        const classes=useStyle();
        return(<>
        <BusinessNav/>
    
        <Box className={classes.mainBox}>
           <Box className={classes.left}>
            
             <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg" style={{height:'350px',marginTop:"50px",marginLeft:"160px",borderRadius:"9px"}}></img>
            <Button style={{backgroundColor:"white",width:"200px",marginTop:"30px",marginLeft:"180px"}}>Change Profile photo</Button>
            </Box>
           <Box className={classes.right}>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Brand:ABC</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Email: ABC@GMAIL.COM</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Vendor Type:Food</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>City: Mumbai</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Address:fusiohboishnboinboisnbo</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Phone: 516468</Typography>
            



            <Button style={{backgroundColor:"white",marginTop:"30px",width:"200px"}}>Edit Profile</Button>
    
           </Box>
        </Box>

        <Box className={classes.lowerBox}>
            <Box className={classes.hbx}>
                <Box className={classes.title}>PHOTO GALLERY</Box>
                <Button style={{backgroundColor:"#4f89f1",color:'white',height:"30px",marginTop:"35px",marginLeft:"400px"}}>Upload Photos</Button>

            </Box>
                <Box className={classes.imgs}></Box>
            </Box>
        {/* <Footer/> */}
        </>);
    }
export default BusinessProfile;