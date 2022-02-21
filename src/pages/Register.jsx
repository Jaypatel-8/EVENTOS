 import styled from 'styled-components'
 import React from 'react'
 import { makeStyles,Box,Typography,TextField,Button } from "@material-ui/core";

 const useStyle = makeStyles({})
 
 const Register = () => {
    const classes = useStyle();
   return (
     <>
        <Box>
              <Typography
                style={{
                  fontSize: "30px",
                  color: "rgb(82 79 79)",
                  fontWeight: 550,
                  fontFamily: "cursive",
                  marginTop: "27px",
                  marginLeft: "50px",
                }}
              >
                New At Eventos?
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  color: "rgb(104 102 102)",
                  fontWeight: 561,
                  fontFamily: "cursive",
                  marginTop: "30px",
                  marginLeft: "100px",
                }}
              >
                Sign Up Now!
              </Typography>

              <Box
                style={{
                  padding: "18px 35px",
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  "& > *": {
                    marginTop: 20,
                  },
                }}
              >
                {/* <TextField  */}
                <TextField 
                  name="username"
                  type="text"
                  label="Enter your user name"
                ></TextField>
                
                 {/* <TextField */}
                   <TextField 
                  name="email"
                  type="email"
                  label="Enter your email Id"
                ></TextField>
               
                 <TextField 
                  name="password"
                  type="text"
                  label="Enter Your Password"
                ></TextField>
                {/* <TextField
                  name="repassword"
                  type="password"
                  label="Re-enter Your Password"
                ></TextField> */}
                <Button 
                
                  style={{
                    marginTop: "40px",
                    padding: "13px",
                    backgroundColor: "rgb(104 102 102)",
                    color: "white",
                  }}
                >
                  Sign Up
                </Button>
                
                <Box
                  style={{
                    display: "flex",
                    marginTop: "26px",
                    marginLeft: "17px",
                    color: "rgb(143 138 138)",
                  }}
                >
                  {/* <Typography > Already a member? </Typography> */}
                  <a
                    style={{
                      fontWeight: 600,
                      color: "rgb(143 138 138)",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {/* Login now */}
                  </a>
                </Box>
              </Box>
            </Box>
          )
     </>
   )
 }
 
 export default Register
 
        