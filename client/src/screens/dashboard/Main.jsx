import React from 'react'
import { Box } from '@material-ui/core';
// import MiniDrawer from '../../components/RestaurantPanel/SharedComponent/SideBar.jsx';
import DashboardRoutes from '../../router/Dashboard';

// import './style.css';


export default function Main() {

    return (
        <div className="wrapper" style={{ display: "block" }}>
            <div className="wrapper__box">
                <Box component="div" className="box__content">
                    {/* <MiniDrawer> */}
                        <DashboardRoutes />
                    {/* </MiniDrawer> */}
                </Box>
            </div>

        </div>
    )
}
