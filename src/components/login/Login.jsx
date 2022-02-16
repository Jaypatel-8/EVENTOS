import {Dialog, DialogContent,makeStyles,Box, Typography} from "@material-ui/core";

const useStyle=makeStyles({
    component:{
        height:'70vh',
        width:'549px',
        

       
        
    },
    image:{
        backgroundImage:`url(${'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?cs=srgb&dl=pexels-pixabay-264985.jpg&fm=jpg'})`,
        height:'70vh',
        width:'43%',
        
        backgroundSize:'100% 70vh',
        backgroundRepeat:'no-repeat',
        borderRadius:'2px',
        
        '&>*':{
            color:'black',
            fontWeight:600,
            
            
        }
        
    },
})


const Login =({open,setOpen})=>{

    const classes=useStyle();

    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} style={{padding:0}}>
                <Box>
                    <Box className={classes.image}>
                        <Typography>Login</Typography>
                        <Typography>Get Access To Your Profile,Booking And Etc.</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;