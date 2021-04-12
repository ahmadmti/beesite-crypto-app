import React from 'react'
import { Box, Container, Grid, } from '@material-ui/core';
import './style.css';

export default function login() {
    return (
        <div className="wrapper">
            <div className="wrapper__box">
                <Box component="div" className="box__content">
                    <Container fixed maxWidth="md" disableGutters>
                        <div className="form__block">
                            <div className="login__content">
                                <Grid container>
                                
                                  
                                        {/* <Loginform /> */}
                                    {/* </Grid> */}
                                  
                                </Grid>
                            </div>
                        </div>
                    </Container>
                </Box>
            </div>

        </div>
    )
}
