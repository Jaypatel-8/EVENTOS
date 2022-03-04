import { Button, Dialog, DialogContent ,makeStyles, TextField, Typography} from "@material-ui/core";
import { DialogTitle } from "@mui/material";

const useStyle=makeStyles({
comp:{
    height:"550px",
    width:"550px",
    //alignItems:"center",
    display:'flex',
    flexDirection:"column",
    //border:"2px solid black"
},

});

const InfoDialog=({open,setOpen})=>{
    const classes=useStyle();

    const handleClose=()=>{
        setOpen(false);
    }
    return(
    
        <Dialog  
        open={open} onClose={handleClose}>
            
            <DialogContent className={classes.comp}>
                <Typography style={{fontSize:"18px"}}>Please Fill This Information</Typography>

                <TextField name="name" label="Enter Your Name" style={{marginTop:"20px"}}></TextField>
                <TextField name="contact" label="Enter Your Contact No." style={{marginTop:"16px"}}></TextField>
                <TextField name="address" label="Enter Your Event Address" style={{marginTop:"16px"}}></TextField>
                <TextField name="days" label="Enter No. Of Days" style={{marginTop:"16px"}}></TextField> 
                <Typography style={{marginTop:"16px",marginRight:"40px"}}>Enter Dates Of Event</Typography>
                <Typography style={{marginTop:"10px",fontSize:"12px",marginRight:"135px"}}>From</Typography>
                <TextField name="sdate" type="date"style={{marginTop:"10px"}} ></TextField>
                <Typography style={{marginTop:"10px",fontSize:"12px",marginRight:"135px"}}>To</Typography>
                <TextField name="edate" type="date" style={{marginTop:"10px"}}></TextField>
                <Button style={{marginTop:"20px",backgroundColor:"black",color:"white",}}>SUBMIT</Button>

            </DialogContent>
            
        </Dialog>
         
    )
}

export default InfoDialog;