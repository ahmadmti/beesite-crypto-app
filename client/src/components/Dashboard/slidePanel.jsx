import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Buttons from "./dashbordButtons";
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChart from "./slidePanelBarChart"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import logo from "../../assets/images/Frame 39.svg"

const useStyles = makeStyles((theme) => ({
    color: {
        color: "#fff"
    },
    dropdownCover: {
        color: "white",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "11px",
        border: "none",
    },
    styleDiv: {
        background: "#fff",
        height: 35,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    amount:{
        marginLeft: 8,
        color: "#0e47dd",
    }
}))
export default function SlideContent() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const classes = useStyles();

    return (
        <div>
            <div className={classes.styleDiv}>

                <img src={logo} alt={"logo"} />
                <span className={classes.amount}>
                    36 890€  +18%/+1800€
                </span>
            </div>
            <div className="dashboard_footer_content_cover_padding" >
                <div className="dasboard_title__content_padding">
                    <div className="footer_line">
                        <svg width="100" height="5" viewBox="0 0 135 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="5" rx="2.5" fill="white" />
                        </svg>

                    </div>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12} >
                            <h3 style={{ color: "#fff" }}>Since You join Beesides, your smart saving has <span style={{ color: "#FFA876" }}>improved by 13040 (+8.3%).</span></h3>

                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Button variant="contained" color="info" class="btn_style_Add btn_style"
                            // onClick={() => EmailForm()}
                            >
                                <div className="btn_cover">
                                    <AddIcon />
                                    <span className='margin' >Add Money</span>
                                </div>
                            </Button>
                            <Button variant="contained" color="info" class="btn_style btn_style_Add"
                            // onClick={() => EmailForm()}
                            >
                                <div className="btn_cover">
                                    <SettingsIcon />
                                    <span className='margin'>Setting</span>
                                </div>
                            </Button>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} >

                            <BarChart />
                        </Grid>
                        {/* <Grid item md={12} sm={12} xs={12} > */}
                        <Grid item md={6} sm={6} xs={6} >
                            <h1 style={{ color: "#fff" }}>October</h1>
                        </Grid>

                        <Grid item md={6} sm={6} xs={6} >
                            <p style={{ color: "#fff", marginTop: 35 }}>+8.3%. <span style={{ marginLeft: 9 }}>+1793 €</span></p>


                            {/* </Grid> */}
                        </Grid>
                        <Grid item md={2} sm={2} xs={2} >
                        </Grid>
                        <Grid item md={8} sm={8} xs={8} >
                            <div className={classes.dropdownCover}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label" style={{ color: "#fff" }}>TOP GAINERS</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                    //   value={age}
                                    //   onChange={handleChange}
                                    >
                                        <MenuItem value={10}>No data</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item md={2} sm={2} xs={2} >
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <div >

                                <Divider />
                                <List component="nav" aria-label="secondary mailbox folder">

                                    <ListItem
                                        className={classes.color}
                                        button
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <Grid item md={6} sm={6} xs={6} >
                                            <ListItemText primary="Clubeling" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={3} >
                                            <ListItemText primary="+58%" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={2} >
                                            <ListItemText primary="+300€" />
                                        </Grid>
                                    </ListItem>

                                    <ListItem
                                        className={classes.color}
                                        button
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <Grid item md={6} sm={6} xs={6} >
                                            <ListItemText primary="Clubeling" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={3} >
                                            <ListItemText primary="+58%" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={2} >
                                            <ListItemText primary="+300€" />
                                        </Grid>
                                    </ListItem>
                                    <ListItem
                                        className={classes.color}
                                        button
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <Grid item md={6} sm={6} xs={6} >
                                            <ListItemText primary="Clubeling" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={3} >
                                            <ListItemText primary="+58%" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={2} >
                                            <ListItemText primary="+300€" />
                                        </Grid>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div>
    );
}
