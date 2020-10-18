import React from 'react';
import { LoginForm } from '../components/componentAuth/LoginForm';
import { RegisterForm } from '../components/componentAuth/RegisterForm';
import '../Styles/auth.css';

export const Login = () => {
    return (
        <div className=" card container mx-auto mt-5 mb-5  ml-3 mr-3">
            <div className="row boxtotal sombra">
                <div className="col autbox ">
                    <h1 className="TitleModa">Iniciar Sesion</h1>
                    <LoginForm />
                </div>
                <div className="col border-left">
                    <h1 className="TitleModa">Registrarse</h1>
                    <RegisterForm />
                </div>

            </div>
        </div>
    )
}
