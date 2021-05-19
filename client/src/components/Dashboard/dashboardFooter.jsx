import React, { useEffect } from 'react'
import './style.css';
import { Box, Container, } from '@material-ui/core';
import TemporaryDrawer from "./slidePanel"
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SlideContent from "./slidePanel";
import $ from 'jquery';

// import LineGraph from '@material-ui/core/LineGraph';
const useStyles = makeStyles({
    list: {
        width: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#0E47DD',
        display: "flex",
        // padding: 20,
    },
    fullList: {
        display: "flex",
        width: '100%',
    },
    btn: {
        float: 'right',
    }
});
export default function DashboardFooter(props) {
    


  const clicked = ()=>{
    // $('.dashboard_footer_content_cover').slideToggle('slow');
    // $('.item-1').addClass('slideDown');
    $("#move-in-to-place").css({"bottom": "0",
        "-webkit-transition": "all 1s",
         "-webkit-transform 1s":"transition", "all 1s": "transform 1s",
        "width":"100%",
        "height":"100%",
        "opacity":"1"});
  }
    const classes = useStyles();
    const [state, setState] = React.useState({

        bottom: false,
    });
    useEffect(() => {
        $('.dasboard_title__content_padding').on('click', function(event){    
            $("#move-in-to-place").css({"bottom": "-100%",
            "-webkit-transition": "all 1s",
             "-webkit-transform 1s":"transition", "all 1s": "transform 1s",
            "width":"100%",
            "height":"0",
            "position": "absolute",
            "opacity":"0"});
        });
        
        $("#move-in-to-place").css({"bottom": "0",
        "-webkit-transition": "all 1s",
         "-webkit-transform 1s":"transition", "all 1s": "transform 1s",
        "width":"100%",
        "height":"100%",
        "opacity":"1"});
        // setState({ ...state, ['bottom']: true });
    }, []);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Container fixed maxWidth="md" className="container" disableGutters>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <div
                        className={clsx(classes.list, {
                            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                        })}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <div >
                            {/* <p>kjhgg</p> */}
                            {/* <SlideContent /> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
    return (
        <React.Fragment>
            {/* <div className="box"> */}
            <div className="dashboard_footer_content_cover" id="stay-in-place"  >
                <div className="dashboard_footer_content" >

                    <Grid container spacing={2}>

                        <Grid item lg={8} md={8} sm={8} xs={8} >
                            <h3>Your smart saving has improved by 13040 (+8.3%).</h3>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4} >

                            <div className="dashboard_footer_content">
                                {/* {['bottom'].map((anchor) => ( */}
                                    {/* <React.Fragment key={anchor}> */}
                                        <Button className={classes.btn} onClick={clicked}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#002F82" />
                                                <path d="M11.41 19.41L16 14.83L20.59 19.41L22 18L16 12L10 18L11.41 19.41Z" fill="white" />
                                            </svg>
                                        </Button>
                                        

                                        {/* <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                            onOpen={toggleDrawer(anchor, true)}
                                        >
                                            {list(anchor)}
                                        </Drawer> */}

                                    {/* </React.Fragment> */}
                             {/* ))} */}
                            </div>
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
            <div id="move-in-to-place">
               <SlideContent/>
            </div>
        


        </React.Fragment>
    );
}
