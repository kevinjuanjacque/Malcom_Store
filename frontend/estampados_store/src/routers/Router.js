import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from '../components/gen/Footer';
import { Nav } from '../components/gen/Nav';

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export const Routers = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/Authentication" component={Login} />
            </Switch>
            <Footer />
        </Router>
    )
}
