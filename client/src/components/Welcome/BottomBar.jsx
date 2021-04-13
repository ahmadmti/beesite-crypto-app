import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import "./style.css";
// import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    rootBar: {
        display: "flex",
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    child: {
        background: "blue",
        width: "300px",
        height: "20px",
    }

}));

export default function BottomBar() {
    const classes = useStyles();

    return (
        <div className={classes.rootBar}>
            <div>
                <svg width="135" height="5" viewBox="0 0 135 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="135" height="5" rx="2.5" fill="black" />
                </svg>
            </div>
        </div>
    );
}
