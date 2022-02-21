import { useState } from "react";
import {
 
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import by from "./by.png";
import { Link } from "react-router-dom";



//css
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "590px",
  },
  image: {
    //backgroundImage:`url(${'https://pngtree.com/freepng/young-service-boy-vector-download-user-icon-vector-avatar_5257569.html'})`,
    background: "#625f5f",
    //background:'black',
    height: "70vh",
    width: "41%",
    //display:'flex'
  },
  txt: {
    color: "white",
    fontWeight: 500,
    fontFamily: "cursive",
  },
});

const Login = () => {
  const classes = useStyle();
   return (

      
         <Box style={{ 
                      display: "flex",
                      justifyContent: "center",
                      alignTtems: "center",
                      marginTop: "90px", }}>
          <Box className={classes.image}>
            <img
              src={by}
              style={{
                height: "200px",
                width: "200px",
                padding: "20px",
                marginTop: "100px",
              }}
            ></img>
            <div
              style={{
                fontSize: "30px",
                color: "white",
                fontWeight: 610,
                marginLeft: "45px",
                marginTop: "-5px",
                fontFamily: "cursive",
              }}
            >
              EVENTOS
            </div>
            <div style={{ marginTop: "20px", marginLeft: "45px" }}>
              <div className={classes.txt}>Welcome to the</div>
              <div className={classes.txt}>Eventos user area.</div>
            </div>
          </Box>

        
            <Box>
              <Typography
                style={{
                  fontSize: "30px",
                  color: "rgb(82 79 79)",
                  fontWeight: 550,
                  fontFamily: "cursive",
                  marginTop: "27px",
                  marginLeft: "125px",
                }}
              >
                Login
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  color: "rgb(104 102 102)",
                  fontWeight: 561,
                  fontFamily: "cursive",
                  marginTop: "30px",
                  marginLeft: "87px",
                }}
              >
                Welcome To Eventos!
              </Typography>
              <Box
                style={{
                  padding: "25px 35px",
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  "& > *": {
                    marginTop: 20,
                  },
                }}
              >
                <TextField
                  name="Username"
                  type="email"
                  label="Enter Your Email"
                ></TextField>

                <TextField
                  name="password"
                  type="password"
                  label="Enter Your Password"
                ></TextField>
                <Typography
                  style={{
                    fontSize: "11px",
                    marginTop: "13px",
                    cursor: "pointer",
                    marginLeft: "184px",
                  }}
                >
                  <Link style={{textDecoration:'none',color:'black'}}>
                  Forgot Password?
                  </Link>
                </Typography>
                <Button
                  style={{
                    marginTop: "20px",
                    padding: "13px",
                    backgroundColor: "rgb(104 102 102)",
                    color: "white",
                  }}
                >
                  Login
                </Button>
                <Typography
                  style={{
                    marginTop: "25px",
                    marginLeft: "92px",
                    color: "rgb(143 138 138)",
                    fontSize: "13px",
                  }}
                >
                  ------Or------
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    marginTop: "26px",
                    marginLeft: "17px",
                    color: "rgb(143 138 138)",
                  }}
                >
                  <Typography> New At Eventos? </Typography>
                  <a
                   
                    style={{
                      fontWeight: 600,
                      color: "rgb(143 138 138)",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    <Link to ="./Register" style={{textDecoration:'none',color:'black'}}>

                    Register Yourself
                    </Link>
                  </a>
                </Box>
              </Box>
            </Box>
        </Box>
     
   );
};
export default Login