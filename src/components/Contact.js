import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import emailjs from 'emailjs-com';
import Navbar from "./Navbar"


function sendEmail(e){
    e.preventDefault();
     emailjs.sendForm('gmail', 'gmailtemplate', e.target, 
    'user_JVzgAzWIyQO5rW05njWQE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

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
                    <Box component="form" className={classes.form} onSubmit={sendEmail}>
                        <Typography variant="h5" style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}} >
                            contactez moi
                        </Typography>
                        <InputField fullWidth={true} label="A propos" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" name="subject"/>
                        <br/>
                        <InputField fullWidth={true} label="Nom" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" name="name"/>
                        <br/>
                        <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" name="email"/>
                        <br/>
                        <InputField fullWidth={true} label="Nom de l'entreprise" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium" name="company" />
                        <br/>
                        <InputField fullWidth={true} label="Message" variant="outlined" multiline
                        rows={4} inputProps={{style:{color: "white"}}} margin="dense" size="medium" name="message" />
                        <br/>
                        <Button type="submit" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            Envoyer
                        </Button>
                    </Box>
                </Grid>
            </Box>
       
    )
}

export default Contact

