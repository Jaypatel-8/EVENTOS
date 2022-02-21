import React, { useContext, useState } from 'react'
import Login from "../pages/login/Login"
import styled from 'styled-components'
import { Search,Person} from "@material-ui/icons";
import { Link } from "react-router-dom";
//import LoginContext from '../context/ContextProvider';
import { Typography } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
     background-color:white;
    
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
  display: flex;
  align-items: center;
`;


const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;

`;
const Right = styled.div` flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover{
    color:darkorange;
  }
 `;
const Navbar = () => {

    const [open,setOpen]=useState(false);
    
    const openLoginDialog=()=>{
      setOpen(true)
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>EVENTOS</Logo>
                </Center>
                <Right>
                  <Link to = {"./Services"} style={{textDecoration:'none',color:'black'}}>
                    <MenuItem>SERVICES</MenuItem>
                  </Link>
                   {/* { account? */}
                    {/* // { <Typography>{account}</Typography>: } */}
                    <Link to = {"./Login"} style={{textDecoration:'none',color:'black'}}>

                    <MenuItem >LOGIN</MenuItem>
                    </Link>
                  {/* {} */}
                   {/* <Person/> */}
                    
          </Right>

            </Wrapper>
            {/* <LoginDialog open={open} setOpen={setOpen} /> */}
        </Container>
    )
}

export default Navbar
