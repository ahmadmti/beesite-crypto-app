import React from 'react'
import './style.css';
import { Button } from '@material-ui/core';
import AgreeDialog from "./AgreeDialog";
import BottomBar from "../Welcome/BottomBar";
export default function EmailFormFooter(props) {
    const [agreeState, setAgreeState] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const openModal=() => {
        // console.log("ok");
        setOpen(true);
        setAgreeState(true)

    };
    return (
        <React.Fragment>
            {/* width: '100%'" */}
            <div className="email_form_cover">

                <div className="email_footer_content">
                    <div className='email_footer_content_inside'>
                        <p>You agree with terms & conditions of  Beeside</p>

                        <div className="btn_cover">
                            <Button variant="contained" color="info" class="btn_style read_btn"
                            // onClick={() => EmailForm()}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z" fill="#002F82" />
                                </svg>

                                <span className='margin'>Read</span>
                            </Button>
                            <Button variant="contained" color="info" class="btn_style agree_btn"
                            onClick={() => openModal()}
                            >
                                <div>
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.00003 11.1701L1.83003 7.00009L0.410034 8.41009L6.00003 14.0001L18 2.00009L16.59 0.590088L6.00003 11.1701Z" fill="white" />
                                    </svg>
                                    <span className='margin'>I agree witg T&C</span>
                                </div>
                            </Button>
                        </div>
                        <div className="confirm_btn_cover">
                        {
                            agreeState ?
                            <Button variant="contained" color="primary" onClick={()=>props.furtherInfo()} class="btn_style confirm_btn">
                            Confirm
                          </Button>
                          :
                          <Button  variant="contained" color="primary" disbled class="btn_style confirm_btn_disable">
                          Confirm
                        </Button>
                        }
                           



                            <BottomBar/>

                        </div>

                    <AgreeDialog open={open} close={()=> setOpen(false)}/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
