import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Qooqu from "./Qooqu";
import Baby from "./Baby";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/qooqu" component={Qooqu} />
                <Route exact path="/baby" component={Baby} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
