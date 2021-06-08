import React, {useState} from 'react'
import {Link} from "react-router-dom"
import avatar from "../images/avataaars.svg"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import Footer from "./Footer"
import MenuIcon from '@material-ui/icons/Menu';

import {
AppBar,
ListItem,
IconButton,
List,
ListItemText,
ListItemIcon,
Avatar,
Divider,
Typography,
Box,
Toolbar
}
from "@material-ui/core"

import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons"

//CSS STYLES

const useStyles= makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0,5rem auto",
        marginLeft:"30px",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}))

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Accueil",
        listPath:"/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resumé",
        listPath:"/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath:"/portfolio"

    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath:"/contact"
    }
]

const Navbar = () => {
    const classes = useStyles()
    const [state, setState] = useState ({
        right:false
    })

    const toggleSlider = (slider, open) =>() =>{
        setState ({...state, [slider]: open});
    };

    const sideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
                <Avatar className={classes.avatar} src={avatar} alt="Luis Rodrigues"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
            
        </Box>

    )
    
    return (
        <div>
            <>
            
            <Box component="nav">
                <AppBar position="static" style={{ background:"#222" }}> 
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{ color:"tomato" }}/>
                        </IconButton>
                        <Typography variant="h5" style={{ color:"tan" }}>
                            Menu
                        </Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer/>
                         </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
            </>
        </div>
    )
}

export default Navbar

