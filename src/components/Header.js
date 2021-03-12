import React from 'react'
import {Typography, Avatar, Grid, Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import avatar from "../images/avataaars.svg"
import Typed from "react-typed"

//CSS

const useStyles = makeStyles(theme =>({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title:{
        color:"tomato"
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))


const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar}  src={avatar} alt="Luis Rodrigues"/>
            </Grid>
            <Typography className={classes.title} variant="h4"> 
                <Typed strings={["Luis Rodrigues"]} typeSpeed={50}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5"> 
                <Typed strings={["Web Developer", "Web Developement"]} typeSpeed={60} backSpeed={70} loop/>
            </Typography>

        </Box>
    )
}

export default Header
