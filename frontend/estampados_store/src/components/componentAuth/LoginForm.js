import React, {  useState } from 'react';
import {AiOutlineUser,AiOutlineLock} from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import {Link} from "react-router-dom";
import { FetchLogin } from '../../hook/FetchLogin';
import { types } from '../../types/type';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const initialState={
        email:'',
        password:''
    }
    const [Login, setLogin] = useState({
        loading:false
    })
    const [Form, setForm] = useState(initialState)
    const CambioInput=( e )=>{
        setForm(
            {...Form,
            [e.target.type]:e.target.value 
            }
        );
    }
    
    const iniciarSesion=(e)=>{
        e.preventDefault();
        setLogin({...Login,loading:true});
        FetchLogin(Form.email,Form.password).then((res)=>{
            if(!res.body.token){
                window.alert(res.body);
                setForm({...Form,password:initialState.password});
                
            }
            else{
                localStorage.setItem('Token', res.body.token);
                dispatch({
                    type:types.login,
                    payload:{
                        nombre:res.body.nombre,
                        token:res.body.token
                    }
                })
                setForm(initialState);
            }
            setLogin({loading:false});
        });
        
        
        
    }
    return (
        <>
        <form onSubmit={(e)=>iniciarSesion(e)}>
            <label htmlFor="emailinput" className="TextBody ml-2" >E-mail:</label>
            <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="email"><AiOutlineUser /></span>
                </div>
                <input required id="emailinput" type="email" className="form-control" placeholder="example@email.com" aria-label="Email" aria-describedby="email" value={Form.email} onChange={(e)=>CambioInput(e)} />
            </div>
            <label htmlFor="emailinput" className="TextBody ml-2" >Contraseña:</label>
            <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="password"><AiOutlineLock /></span>
                </div>
                <input required id="passwordinput" type="password" className="form-control" placeholder="********" value={Form.password} onChange={(e)=>CambioInput(e)} />
            </div>

            <button type="submit" className="btn btn-dark btn-block "> 
                {Login.loading && (<div className="spinner-border text-light mr-2 " role="status">
                    <span className="sr-only">Loading...</span>
                </div>   ) }  
                IDENTIFICATE 
            </button>
            <hr />
            
            
                
        
            
        </form>
        <div className="container TextCentrado mb-3">

            <Link to="/olvida" className="link "> ¿Haz olvidado tu contraseña?</Link>

        </div>
        </>
    )
}
