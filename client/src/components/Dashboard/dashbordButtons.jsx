import React from 'react'
import './style.css';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
export default function Buttons(props) {
    return (
        <React.Fragment>
            <div className="Dashboard_title">
                <div className="dasboard_title__content">
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12} >
                            <Button variant="contained" color="info" class="btn_style_send btn_style"
                            // onClick={() => EmailForm()}
                            >
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.01 9H0V11H7.01V14L11 10L7.01 6V9ZM12.99 8V5H20V3H12.99V0L9 4L12.99 8Z" fill="#002F82" />
                                </svg>


                                <span className='margin' >{props.btn1}</span>
                            </Button>
                            <Button variant="contained" color="info" class="btn_style add_btn_style"
                            // onClick={() => EmailForm()}
                            ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#002F82" />
                                </svg>

                                <span className='margin'>{props.btn2}</span>
                            </Button>
                        </Grid>


                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
