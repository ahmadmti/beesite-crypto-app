import React from 'react'
import { Box, Container, Grid, } from '@material-ui/core';
import './style.css';
import RegisterForm from '../../components/auth/RegisterForm';

// import AuthWelcomeImgs from '../../components/auth/AuthWelcomeHeader';
export default function register() {
    return (
        <div className="wrapper">
            <div className="wrapper__box">
                <Box component="div" className="box__content">
                    <Container fixed maxWidth="md" disableGutters>
                        <div className="form__block">
                            <div className="login__content">
                                <Grid container>
                        
                                    <Grid item md={12}>
                                        <RegisterForm />
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
