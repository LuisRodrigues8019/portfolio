import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme=>({
    form:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button:{
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))



const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label":{
            color:"tan"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor:"tan"
            },
            "&.Mui-focused fieldset":{
                borderColor:"tan"
            }
        }
    }
})(TextField);

const Contact = () => {
    const classes = useStyles()
    return (
            <Box component="div" style={{background:"#233", height:"100vh"}}>
                <Navbar />
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}} >
                            contactez moi
                        </Typography>
                        <InputField fullWidth={true} label="Nom" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium"/>
                        <br/>
                        <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" />
                        <br/>
                        <InputField fullWidth={true} label="Nom de l'entreprise" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" />
                        <br/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            Envoyer
                        </Button>
                    </Box>
                </Grid>
            </Box>
       
    )
}

export default Contact

