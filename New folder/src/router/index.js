import React from 'react';
import { BrowserRouter,  Switch } from "react-router-dom";
import AuthRoutes from './Auth';
function router() {
    return (
        <div className="App" >
            <BrowserRouter>
                <Switch>
                    <AuthRoutes />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default router;