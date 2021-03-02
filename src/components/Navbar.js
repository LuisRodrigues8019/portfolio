import React, {useState} from 'react'
import avatar from "../images/avataaars.svg"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"

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
ContactMail,
AddBox
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
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact"
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
                <ListItem button key={key}>
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
                            <ArrowBack style={{ color:"tomato" }}/>
                        </IconButton>
                        <Typography variant="h5" style={{ color:"tan" }}>
                            Portfolio
                        </Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                         </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
            </>
        </div>
    )
}

export default Navbar

