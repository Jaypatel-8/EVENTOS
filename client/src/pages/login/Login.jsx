import { useState } from "react";
import {
 
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import by from "./by.png";
import { Link , useHistory} from "react-router-dom";
import { Message } from "@material-ui/icons";
import {useAlert} from 'react-alert'



//css
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "590px",
  },
  image: {
    background: "#625f5f",
    height: "70vh",
    width: "41%",
  },
  txt: {
    color: "white",
    fontWeight: 500,
    fontFamily: "cursive",
  },
});

const Login = () => {

    const history =useHistory();
    const alert = useAlert();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const loginUser = async (e) => {
      e.preventDefault();

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
  
        body: JSON.stringify({
           email, password
  
        })
      });

      const data = res.json();

      if (res.status === 400 || !data){
        window.alert("Invalid credintial")
      }else{
        //window.alert("Log In successfully!")
        alert.success('logged In successfully.')
     
        history.push("/");
      }
    };


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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 

                  name="Username"
                  type="email"
                  label="Enter Your Email"
                ></TextField>

                <TextField 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 

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
                  <Link to="/password/forgot"  style={{textDecoration:'none',color:'black'}}>
                  Forgot Password?
                  </Link>
                </Typography>
                <Button   onClick={loginUser}
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
                    <Link to ="./SignUp" style={{textDecoration:'none',color:'black'}}>

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