import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#233"
    },
    timeLine:{
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }

    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));


const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2021
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            junior web developer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} className={classes.subHeading}>
                            Mission locale de saint-gilles
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Création du futur site e-commerce Biotiful.bio
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020-2021
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            junior web developer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} className={classes.subHeading}>
                            Becode.org
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            gestion de projets en front et backend
                        </Typography>
                    </Box>  
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2008-2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            vendeur produits techniques
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} className={classes.subHeading} >
                            Fnac City 2 Bruxelles
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            contact client, <br></br>
                            merchandising, <br></br>
                            gestionnaire du rayon bureautique, <br></br>
                             son, objets connectés, smartphones
                        </Typography>
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2001
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            stage webdesigner
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} >
                            New SCS
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            génération d’un site, <br></br>
                            création du layout, <br></br>
                            mise en page en Dreamweaver Ultradev 4, <br></br>
                            animation pour un site de cinéma en Flash 5
                        </Typography>
                    </Box> 
                </Box>
                <Typography variant="h4" align="center" className={classes.heading}>
                    formation
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015-2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            training
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} className={classes.subHeading}>
                            Apple seed
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        ios asta training session
                        </Typography>
                    </Box>  
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2007
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            TECHNIQUES DE VENTE ET NÉERLANDAIS COMMERCIAL
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} >
                            Institut Edmond Machtens
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            techniques de vente, <br></br>
                            néerlandais commercial, <br></br>
                            expression orale, <br></br>
                            communication professionnelle
                        </Typography>
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2000-2001
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            OPERATEUR DE SITE INTERNET
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}} >
                            Centre de formation Fij
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            création
                            gestion et mise à jour de site internet, <br></br>
                            gestion de couleurs de l’espace, <br></br>
                            théorie de la couleur, <br></br>
                            réation et mise à jour de base de données
                        </Typography>
                    </Box> 
                </Box>
            </Box>
        </>
    );
};

export default Resume
