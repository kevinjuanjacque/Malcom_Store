import React from 'react';
import {Link,  NavLink } from 'react-router-dom';
import logo from '../../Assets/logoMalcomStore.png';

import {AiOutlineHome, AiOutlineUser,AiOutlineShopping,AiOutlineHeart,AiOutlineSkin} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../types/type';

export const Nav = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const logOut=()=>{
        dispatch({
            type:types.logout
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="logo"></img>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="ml-5 mx-auto ">
                    <ul className="navbar-nav ml-5 form-inline">
                    <li className="nav-item ">
                        <NavLink className="nav-link" activeClassName="active" exact to="/"><AiOutlineHome size="25" className="mb-2" /> Home</NavLink>
                    </li>
                    <li className="nav-item">
            
                        <NavLink className="nav-link ml-4" activeClassName="active" to="/s"><AiOutlineSkin size="25" className="mb-2" /> Categoria</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        
                        
                    </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-auto form-inline">
                    {
                    (!auth.nombre) ? (<li className={(auth.nombre) ? "nav-item ml-5" : "nav-item"}>
                        <NavLink className={(auth.nombre) ? "nav-link ml-5" : "nav-link"} activeClassName="active" to="/Authentication">
                            <AiOutlineUser size="25" className="mb-2" /> 
                        </NavLink>
                    </li>):
                    (<li className="nav-item dropdown ml-5">
                        <a className="nav-link dropdown-toggle ml-5" href="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <AiOutlineUser size="25" className="mb-2" /> {(auth.nombre) && auth.nombre}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <button className="dropdown-item" >Action</button>
                        <button className="dropdown-item" >Another action</button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={logOut}>Cerrar Sesion</button>
                        </div>
                    </li>)
                    }
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/Login"><AiOutlineShopping size="25" className="mb-2" /> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/Login"><AiOutlineHeart size="25" className="mb-2" /> </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
