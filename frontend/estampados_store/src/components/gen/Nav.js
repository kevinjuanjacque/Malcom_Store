import React from 'react';
import {Link,  NavLink } from 'react-router-dom';
import logo from '../../Assets/logoMalcomStore.png';

import {AiFillHome} from 'react-icons/ai';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="logo"></img>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/"><AiFillHome size="25" className="mb-2" /> Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/"><AiFillHome size="25" className="mb-2" /> Home</NavLink>
                </li>
                
                <li className="nav-item">
                    
                    
                </li>
                </ul>
            </div>
        </nav>
    )
}
