import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles ({
    root:{
        "& .MuiBottomNavigation-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover":{
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation widht="auto" style={{background: "#222"}}>
            <BottomNavigationAction 
                className={classes.root} 
                style={{padding: 0}} 
                icon={<GitHubIcon/>}
                a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019"
            />
            <BottomNavigationAction 
                className={classes.root} 
                style={{padding: 0}} 
                icon={<LinkedInIcon/>}
                a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/luis-rodrigues-da-silva/"
            />
            <BottomNavigationAction 
                className={classes.root} 
                style={{padding: 0}} 
                icon={<InstagramIcon/>}
            />
        </BottomNavigation>
    )
}

export default Footer
