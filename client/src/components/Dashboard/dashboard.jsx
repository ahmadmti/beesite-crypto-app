import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Container, } from '@material-ui/core';
import Title from "./titleValue";
import Buttons from "./dashbordButtons";
import './style.css';
import PieChart from "./pieChart";
import FooterAbove from "./footerAbove";
import LineChart from "./lineChart";
import DashboardFooter from "./dashboardFooter";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 460,
        backgroundColor: theme.palette.background.paper,
    },
    color: {
        textAlign: "center",
        color: "#FFA876",
        fontFamily: "Biryani",
        fontStyle: "normal",
        fontWeight: "normal",
    },
    colorSelected: {
        textAlign: "center",
        color: "#002F82",
    },
    center: {
        fontSize: "13px",
        display: "flex",
        flexDirection: "row",
    }
}));
export default function Dashboard(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="title">
                <Container fixed maxWidth="md" className="container" disableGutters>
            
                    <div className="dashboard_cover ">
                        <Grid item md={12} sm={12} xs={12} >
                            <PieChart />
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12} >
                                <List component="nav" className={classes.root} aria-label="contacts">
                                    <div className={classes.center} >
                                        <ListItem button>

                                            <ListItemText className={classes.color} dense primary="Smart Saving" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText className={classes.color} dense primary="No Investment" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText className={classes.colorSelected} dense primary="Bit Coin" />
                                        </ListItem>
                                    </div>
                                </List>
                            </Grid>


                            <Grid item md={12} sm={12} xs={12} >

                                <Title title="Bitcoin wallet" value="0,41" subValue="3600" />
                                <Buttons btn1="Send to" btn2="Add bitcoin" />
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} >
                                <LineChart />

                            </Grid>
                            <Grid item md={12} sm={12} xs={12} >
                                <FooterAbove title="Other  wallet" value="6 589" />
                                <Buttons btn1="Send to" btn2="Add money" />
                            </Grid>

                         
                            <Grid item md={12} sm={12} xs={12} >
                                
                                <DashboardFooter />

                                
                            </Grid>

                        </Grid>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}
