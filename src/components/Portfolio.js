import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"

import project1 from "../images/boumanjohnsonproject.jpg"
import project2 from "../images/todoapp.jpg"
import project3 from "../images/freshop.jpg"
import project4 from "../images/biotiful.jpg"
import Navbar from "./Navbar"


const useStyles = makeStyles ({
    mainContainer:{
        background: "#233",
        height: "100%"
    },
    cardContainer:{
        maxWidth: 345,
        margin: "5rem auto",
    },
    padding: {
        paddingBottom:"176px"
    },
    padding2:{
        paddingBottom:"40px"
    },
    padding3:{
        paddingBottom:"27px"
    },    
    link:{
        textDecoration:"none",
        color:"tomato"
    },
    a:{
        display: "block",
        textAlign: "center"
      }
})


const Portfolio = () => {
    const classes = useStyles()
    return (
        <div className="background">
        <Box component="div">
            <Navbar/>
            <Grid container justify="center">
                {/* project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="150" image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projet d'habitation Bouman-Johnson
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" align="justify">
                                    L'application sera assez simple. Il n'a besoin que de deux choses. 
                                    Première. <br></br>
                                    Le formulaire sera pour l'utilisateur deux complet avec des informations sur la maison. 
                                    Ce formulaire sera connecté à l'API. <br></br>
                                    La deuxième chose est la façon d'afficher les résultats. 
                                    Nous n'avons pas vraiment grand-chose à dire à ce sujet. 
                                    Cela pourrait être une fenêtre contextuelle, une autre page, vous avez une marge de manœuvre là-bas.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.a}>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019/Bouman-Johnson-housing-project" className={classes.link} >Github</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://luisrodrigues8019.github.io/Bouman-Johnson-housing-project/" className={classes.link}>Demo</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project2" height="150" image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Todo App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.padding} align="justify">
                                    Dans ce didacticiel, nous allons créer une application simple de liste de tâches à l'aide de node.js 
                                    et mongoDB.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.a}>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019/TodoApp" className={classes.link}>Github</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://todoappluis.herokuapp.com/" className={classes.link}>Demo</a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project3" height="150" image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Freshshop
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.padding2} align="justify">
                                    Freshshop est votre nouveau client. Ils se spécialisent dans les aliments biologiques et les vélos biodégradables. <br></br>
                                    Leur magasin à Saint-Gilles est tellement rentable qu'ils en ont ouvert un autre juste en dessous de l'appartement de Thomas. <br></br>
                                    Pour fêter ça, ils veulent lancer un site e-commerce en même temps. <br></br>
                                    Freshshop possède déjà la partie frontend du projet. Vous devez maintenant implémenter le back-end avec NodeJS ou Php en POO.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.a}>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019/OOP" className={classes.link}>Github</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://freshluis.herokuapp.com/" className={classes.link}>Demo</a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project4" height="150" image={project4} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Biotiful
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.padding3} align="justify">
                                La Mission Locale de Saint-Gilles est une ASBL reconnue comme OISP 
                                (Organisme d’Insertion Socioprofessionnelle) et active dans l’accompagnement des demandeurs d’emploi. 
                                Parallèlement la Mission Locale est mandatée pour développer des projets d’économie sociale. 
                                C’est dans ce cadre qu’elle a lancé, il y a près de deux ans, son projet d’économie sociale en maraîchage biologique et en éco-jardinage, Biotiful. 
                                Dans cette continuité, Biotiful va mettre n ligne son site E-commerce pour la vente de ses paniers bio.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.a}>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" className={classes.link}>Github</a>
                                    
                                </Button>
                                <Button size="small" color="primary">
                                    <a target="_blank" without rel="noreferrer" href="https://biotiful.bio" className={classes.link}>Demo</a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
};

export default Portfolio

