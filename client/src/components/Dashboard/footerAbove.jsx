import React from 'react'
import './style.css';
import Grid from '@material-ui/core/Grid';
export default function FooterAbove(props) {
    return (
        <React.Fragment>
            <div className="Dashboard_title">
                <div className="dasboard_title__content">
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={6} xs={6} >
                            <h2>{props.title}</h2>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6} >
                            <span>
                                <div className="justify_values">
                                    <h4 >{props.value}
                                        <span>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.0124 5.79074e-06C7.17526 -0.00743171 0.00744329 7.15051 5.79074e-06 15.9876C-0.00743171 24.8248 7.15051 31.9926 15.9876 32C24.8236 31.9926 31.9864 24.8359 32 16C32 7.16782 24.8446 0.00744329 16.0124 5.79074e-06ZM15.9876 29.3375C8.62169 29.3375 2.65019 23.3659 2.65019 16C2.65019 8.63407 8.62169 2.66257 15.9876 2.66257C23.3511 2.67001 29.3176 8.63657 29.3251 16C29.3251 23.3659 23.3536 29.3375 15.9876 29.3375Z" fill="#002F82" />
                                                <path d="M16.3038 22.1879C18.2278 22.1879 19.8496 21.4237 21.1689 19.8951L24.0001 22.5471C23.0839 23.6704 21.9477 24.5268 20.5917 25.1161C19.254 25.7054 17.7514 26.0001 16.0839 26.0001C14.4896 26.0001 13.0053 25.7146 11.631 25.1437C10.275 24.5728 9.12051 23.7625 8.16763 22.7128C7.21475 21.6631 6.52758 20.4476 6.10611 19.0664H2.00009V16.7459H5.69381C5.67549 16.5802 5.66632 16.3316 5.66632 16.0001C5.66632 15.6686 5.67549 15.42 5.69381 15.2542H2.00009V12.9338H6.10611C6.52758 11.5526 7.21475 10.3371 8.16763 9.28738C9.12051 8.23766 10.275 7.42735 11.631 6.85644C13.0053 6.28554 14.4896 6.00009 16.0839 6.00009C17.7514 6.00009 19.254 6.29475 20.5917 6.88407C21.9477 7.47339 23.0839 8.32053 24.0001 9.42551L21.1689 12.0774C19.8312 10.5673 18.2095 9.81225 16.3038 9.81225C15.0943 9.81225 14.0132 10.0885 13.0603 10.641C12.1074 11.1935 11.3744 11.9577 10.8614 12.9338H17.8155V15.2542H10.1742C10.1559 15.42 10.1467 15.6686 10.1467 16.0001C10.1467 16.3316 10.1559 16.5802 10.1742 16.7459H17.8155V19.0664H10.8614C11.3744 20.0424 12.1074 20.8067 13.0603 21.3592C14.0132 21.9117 15.0943 22.1879 16.3038 22.1879Z" fill="#002F82" />
                                            </svg>

                                        </span>
                                    </h4>
                                </div>
                                <span>{props.subValue}</span>
                            </span>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}