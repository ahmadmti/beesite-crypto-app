import React from 'react'
import { Box, Container, Grid, } from '@material-ui/core';
import './style.css';
import WelcomeHeader from "../../components/Welcome/WelcomeHeader";
import CreateButton from "../../components/Welcome/CreateAccountButton";
import WelcomeSlider from "../../components/Welcome/WelcomeSlider";


export default function welcome() {
    return (
        <div className="wrapper">
            <div className="wrapper__box">
                <Box component="div" className="box__content">
                    <Container fixed maxWidth="md" className="container" disableGutters>
                        <div >
                            <div >
                                <Grid>

                                    <Grid item md={12} >
                                        <WelcomeHeader />
                                    </Grid>
                                    <Grid item md={12} >
                                        <WelcomeSlider />
                                    </Grid>
                                    <Grid item md={12} >
                                        <CreateButton />
                                    </Grid>
                                 
                                </Grid>
                            </div>
                        </div>
                    </Container>
                </Box>
            </div>

        </div>
    )
}
