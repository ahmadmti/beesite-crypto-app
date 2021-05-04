import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import welcome from '../screens/welcome/welcome.jsx';
import register from '../screens/auth/register';

import Main from '../screens/dashboard/Main';
function router() {
    return (
        <div className="App" >
         
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/welcome" component={welcome} />
                        <Route path="/register" component={register} />
                        <Route path="/besside" component={Main} />
                        <Route render={() => <Redirect to="/welcome" />} />
                    </Switch>
                </BrowserRouter>
          
        </div>
    );
}

export default router;