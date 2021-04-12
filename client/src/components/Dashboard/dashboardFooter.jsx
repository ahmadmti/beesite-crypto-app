import React from 'react'
import './style.css';
import { Box, Container, } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
// import LineGraph from '@material-ui/core/LineGraph';
export default function DashboardFooter(props) {
    return (
        <React.Fragment>

            <div className="dashboard_footer_content_cover">
                <div className="dashboard_footer_content">
                    {/* <Grid item md={12} sm={12} xs={12} > */}
                    <Grid container spacing={2}>
                        <Grid item lg={8} md={8} sm={8} xs={8} >
                            <h3>Your smart saving has improved by 13040 (+8.3%).</h3>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} >
                            <h2>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#002F82" />
                                    <path d="M11.41 19.41L16 14.83L20.59 19.41L22 18L16 12L10 18L11.41 19.41Z" fill="white" />
                                </svg>
                            </h2>
                        </Grid>


                    </Grid>
                    {/* </Grid> */}
                    <div className="footer_line">
                        <svg width="135" height="5" viewBox="0 0 135 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="135" height="5" rx="2.5" fill="white" />
                        </svg>

                    </div>
                </div>
            </div>

            {/* <div className="Dashboard_title">
                <div className="dasboard_title__content">
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={6} xs={6} >
                           {/* <LineGraph/> */}
            {/* </Grid>
                     
                    </Grid>
                </div>
            </div> */}
        </React.Fragment>
    );
}
