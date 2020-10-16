import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from '../components/gen/Footer';
import { Nav } from '../components/gen/Nav';

import { Home } from '../screens/Home';

export const Routers = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" >
                    <Home/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
