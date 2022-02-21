import { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import by from "./login/by.png";
import { Link } from "react-router-dom";

//css
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "590px",
  },
  image: {
    //backgroundImage:`url(${'https://pngtree.com/freepng/young-service-boy-vector-download-user-icon-vector-avatar_5257569.html'})`,
    background: "#da9595",
    //background:'black',
    height: "70vh",
    width: "31%",
    //display:'flex'
  },
  txt: {
    color: "white",
    fontWeight: 500,
    fontFamily: "cursive",
    marginLeft: "63px",
  },
});

const Register = () => {
  const classes = useStyle();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignTtems: "center",
        marginTop: "90px",
      }}
    >
      <Box className={classes.image}>
        <img
          src={by}
          style={{
            height: "200px",
            width: "200px",
            padding: "20px",
            marginTop: "100px",
            marginLeft: "109px",
          }}
        ></img>
        <div
          style={{
            fontSize: "30px",
            color: "white",
            fontWeight: 610,
            marginLeft: "155px",
            marginTop: "-5px",
            fontFamily: "cursive",
          }}
        >
          EVENTOS
        </div>
        <div style={{ marginTop: "20px", marginLeft: "45px" }}>
          <div className={classes.txt}>Welcome to the Eventos user area</div>
          {/* <div className={classes.txt}>.</div> */}
        </div>
      </Box>

      <Box style={{ border: "8px solid #da9595" }}>
        <Typography
          style={{
            fontSize: "30px",
            color: "rgb(226 112 112)",
            fontWeight: 550,
            fontFamily: "cursive",
            marginTop: "27px",
            marginLeft: "22px",
            marginRight:"10px"
          }}
        >
          New At EVENTOS?
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            color: "rgb(226 112 112)",
            fontWeight: 561,
            fontFamily: "cursive",
            marginTop: "30px",
            marginLeft: "110px",
          }}
        >
          Sign Up Now!
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
            type="text"
            label="Enter Your User Name"
          ></TextField>
          <TextField
            name="email"
            type="email"
            label="Enter Your Email"
          ></TextField>

          <TextField
            name="password"
            type="password"
            label="Enter Your Password"
          ></TextField>
         
         
          <Button
            style={{
              marginTop: "20px",
              padding: "13px",
              backgroundColor: "#da9595",
              color: "white",
            }}
          >
            Sign Up
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
            <Typography> Already A Member? </Typography>
            <a
              style={{
                fontWeight: 600,
                color: "rgb(143 138 138)",
                //textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <Link to="./Login" style={{textDecoration:"none"}}>Login Now</Link>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
