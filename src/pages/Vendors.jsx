import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  Title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "24px",
    marginTop: "100px",
    paddingTop: "",
    marginRight:'32px',
    fontWeight:600
  },
  mainbox: {
    height: "auto",
    width: "100%",
  },

  linearbox: {
    display: "flex",
    marginTop: "25px",
    alignItems: "center",
    justifyContent: "center",
  },
  b1: {
    padding: "10px",
    backgroundColor: "#ffffff",
    height: "auto",
    borderRadius: "8px",
    width: "265px",
    marginRight: "40px",
    boxShadow: "2px 5px 2px #8887ab",
    border: "1px solid black"
  },
  b2: {
    padding: "10px",
    backgroundColor: "#ffffff",
    height: "auto",
    borderRadius: "8px",
    width: "265px",
    marginRight: "40px",
    boxShadow: "2px 5px 2px #8887ab",
    border: "1px solid black"
  },
  b3: {
    padding: "10px",
    backgroundColor: "#ffffff",
    height: "auto",
    borderRadius: "8px",
    width: "265px",
    marginRight: "40px",
    boxShadow: "2px 5px 2px #8887ab",
    border: "1px solid black"
  },
  b4: {
    padding: "10px",
    backgroundColor: "#ffffff",
    height: "auto",
    borderRadius: "8px",
    width: "265px",
    marginRight: "40px",
    boxShadow: "2px 5px 2px #8887ab",
    border: "1px solid black"
  },
});

const Vendors = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box className={classes.Title}>Vendors</Box>
      <Box className={classes.mainbox}>
        <Box className={classes.linearbox}>
          <Box className={classes.b1}>
            <img
              src="https://images.pexels.com/photos/7184081/pexels-photo-7184081.jpeg?cs=srgb&dl=pexels-the-shaan-photography-7184081.jpg&fm=jpg"
              style={{
                height: "187px",
                width: "264px",
                marginLeft: "0px",
                borderTopLeftRadius: "0px",
              }}
            />
            <Box className={classes.Info}>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "24px",
                  marginTop: "20px",
                  fontFamily: "Abel",
                  fontWeight: "700",
                }}
              >
             Vendor Name
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "16px",
                  marginTop: "10px",
                  width: "175px",
                  fontFamily: "Abel",
                }}
              >
                Photography,Prewedding etc.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.b2}>
            <img
              src="https://images.pexels.com/photos/7184081/pexels-photo-7184081.jpeg?cs=srgb&dl=pexels-the-shaan-photography-7184081.jpg&fm=jpg"
              style={{
                height: "187px",
                width: "264px",
                marginLeft: "0px",
                borderTopLeftRadius: "0px",
              }}
            />
            <Box className={classes.Info}>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "24px",
                  marginTop: "20px",
                  fontFamily: "Abel",
                  fontWeight: "700",
                }}
              >
                Vendor Name
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "16px",
                  marginTop: "10px",
                  width: "175px",
                  fontFamily: "Abel",
                }}
              >
                Photography,Prewedding etc.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.b3}>
            <img
              src="https://images.pexels.com/photos/7184081/pexels-photo-7184081.jpeg?cs=srgb&dl=pexels-the-shaan-photography-7184081.jpg&fm=jpg"
              style={{
                height: "187px",
                width: "264px",
                marginLeft: "0px",
                borderTopLeftRadius: "0px",
              }}
            />
            <Box className={classes.Info}>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "24px",
                  marginTop: "20px",
                  fontFamily: "Abel",
                  fontWeight: "700",
                }}
              >
                Vendor Name
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "16px",
                  marginTop: "10px",
                  width: "175px",
                  fontFamily: "Abel",
                }}
              >
                Photography,Prewedding etc.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.b4}>
            <img
              src="https://images.pexels.com/photos/7184081/pexels-photo-7184081.jpeg?cs=srgb&dl=pexels-the-shaan-photography-7184081.jpg&fm=jpg"
              style={{
                height: "187px",
                width: "264px",
                marginLeft: "0px",
                borderTopLeftRadius: "0px",
              }}
            />
            <Box className={classes.Info}>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "24px",
                  marginTop: "20px",
                  fontFamily: "Abel",
                  fontWeight: "700",
                }}
              >
                Vendor Name
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontSize: "16px",
                  marginTop: "10px",
                  width: "175px",
                  fontFamily: "Abel",
                }}
              >
                Photography,Prewedding etc.
              </Typography>
            </Box>
          </Box>
        
        </Box>
      </Box>
    </>
  );
};

export default Vendors;