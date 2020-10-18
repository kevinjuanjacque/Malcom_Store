import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authloginAction } from '../actions/authAction';
import { Footer } from '../components/gen/Footer';
import { Nav } from '../components/gen/Nav';
import { validarToken } from '../helpers/validarToken';

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export const Routers = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const token = localStorage.getItem('Token');
    useEffect(() => {
        if (token) { (validarToken(token).then(validacion=>{
            if(!validacion.body.token){
                localStorage.removeItem('Token');
            }
            else{
                dispatch(authloginAction(validacion.body.nombre,validacion.body.token));
            }
    
        }) )};
    }, [token,dispatch])
    return (
        <Router>
            {
                    
                
            }
            <Nav />
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>

                {(!auth.token) && (<Route exact path="/Authentication" component={Login} />)}

                <Redirect to="/"  />
            </Switch>
            <Footer />
        </Router>
    )
}
