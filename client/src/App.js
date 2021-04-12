import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import router from './router';
import './App.css';

function App() {
    return (
        <div className="App" >
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={router} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}


export default App;