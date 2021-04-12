import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./style.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:"center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

export default function CreateButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavLink to="/register">
            <Button variant="contained" to="" color="primary" className={classes.color}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="white" />
                </svg>

                <p style={{marginLeft:12}}>Create an account</p>
            </Button>
            </NavLink>
            <div className="login__content">
                                            <a href="#" style={{ fontWeight: 700, color: '#002F82', fontSize: 16 }}>Sign In</a>
                                        </div>

        </div>
    );
}
