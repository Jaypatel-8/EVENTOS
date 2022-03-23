import { Box,makeStyles } from '@material-ui/core';
//import  styled  from "styled-components"
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";


const useStyle =  makeStyles({
  loader:{
    size: 15,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    marginTop:"300px"
  }
 
  
}
)



const Loader = () => {
  const classes = useStyle();
  return (
    <>
    
    <Box className={classes.loader}>
      <PropagateLoader/>
    </Box>
    
    </>
  )
}

export default Loader
