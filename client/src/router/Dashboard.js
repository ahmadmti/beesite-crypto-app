


import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";

// import welcome from '../screens/welcome/welcome.jsx';
import DashboardView from '../screens/dashboard/dashboard';

function DashboardRoutes() {
    let { path } = useRouteMatch();

    return (

        <React.Fragment>
            {/* <Route path="/welcome" component={welcome} /> */}
            <Route path={`${path}/dashboard`} component={DashboardView} />
            {/* <Route path="/dashboard" component={DashboardView} /> */}
           
        </React.Fragment>



    );
}

// function test() {
//     return "Test Component";
// }

// function register() {
//     return "register Component";
// }
export default DashboardRoutes;