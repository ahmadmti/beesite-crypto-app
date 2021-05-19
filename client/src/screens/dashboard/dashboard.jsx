import React from 'react'
import { Box, Container, Grid, } from '@material-ui/core';
// import './style.css';
import Dashboard from "../../components/Dashboard/dashboard";


export default function DashboardView() {
    return (
        <div className="wrapper">
            <div className="wrapper__box">
                <Box component="div" className="box__content">
                    <Container fixed maxWidth="md" className="container" disableGutters>
                        <div >
                            <div >
                                <Grid>

                                    <Grid item md={12} >
                                    <div className="box">
                                        <Dashboard />
                                    </div>
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
