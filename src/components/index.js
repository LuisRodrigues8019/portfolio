import React from 'react'
import Header from './Header'
import Navbar from "./Navbar"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"

const usesTyles = makeStyles ({
    particlesCanva:{
        position:"absolute",
        opacity:"0.3"
    }
})

const Home = () => {
    const classes = usesTyles()
    return (
        <>
            <Navbar/>
            <Header/>
            <Particles 
                canvasClassName={classes.particlesCanva}
                params={{
                   particles:{
                       number:{
                           value:45,
                           density:{
                            enable: false,
                            value_area:900
                           }
                       },
                       shape:{
                        type:"triangle",
                        stroke:{
                            width:1,
                            color:"tomato"
                        }
                       },
                       size: {
                        value:8,
                        random:true,
                        anim: {
                            enable:true,
                            speed:6,
                            size_min: 0.1,
                            sync:true
                        }
                       },
                       opacity:{
                           value:1,
                           random: true,
                           anim: {
                            enable:true,
                            speed:1,
                            opacity_min:0.3,
                            sync:true

                           }
                       }
                   } 
                }}
            />
        </>
    )
}

export default Home
