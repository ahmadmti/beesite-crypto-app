import React from 'react';
import { Route } from "react-router-dom";
import welcome from '../screens/welcome/welcome.jsx';
import register from '../screens/auth/register';

function AuthRoutes() {
    return (

        <React.Fragment>
            <Route path="/welcome" component={welcome} />
           
            <Route path="/auth/register" component={register} />
           
        </React.Fragment>



    );
}

// function test() {
//     return "Test Component";
// }

// function register() {
//     return "register Component";
// }
export default AuthRoutes;