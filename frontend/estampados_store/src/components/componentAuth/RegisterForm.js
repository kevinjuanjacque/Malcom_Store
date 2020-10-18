import React, { useState } from 'react';
import {AiOutlineUser,AiOutlineLock,AiOutlineMail} from 'react-icons/ai';

export const RegisterForm = () => {
    const initState={
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        repetPassword:''
    };
    const [Form, setForm] = useState(initState);

    const CambioInput=( e )=>{
        (e.target.type==='email') ? setForm(
            {...Form,
            [e.target.type]:e.target.value 
            }
        ):
        setForm(
            {...Form,
            [e.target.id]:e.target.value 
            }
        )
    }

    const EnviarForm =(e)=>{
        e.preventDefault();
        console.log(Form);
        setForm(initState);
    }

    return (
        <>
            <form onSubmit={(e)=>EnviarForm(e)}>
            <label className="TextBody ml-2" ><AiOutlineUser className="mb-2" /> Usuario:</label>
            <div className="row">
                <div className="col input-group mb-3 ">
                    <input required id="nombre" type="text" className="form-control" placeholder="Nombre" value={Form.nombre} onChange={(e)=>CambioInput(e)} />
                </div>
                <div className="col input-group mb-3 ">
                    <input required id="apellido" type="text" className="form-control" placeholder="Apellido" value={Form.apellido} onChange={(e)=>CambioInput(e)} />
                </div>
            </div>
                <label htmlFor="emailinputR" className="TextBody ml-2" >E-mail:</label>
                <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="emailIcon"><AiOutlineMail /></span>
                    </div>
                    <input required id="email" type="email" className="form-control" placeholder="example@email.com" aria-label="Email" aria-describedby="email" value={Form.email} onChange={(e)=>CambioInput(e)} />
                </div>
                <label htmlFor="passwordR" className="TextBody ml-2" >Contraseña:</label>
                <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="passwordIcon"><AiOutlineLock /></span>
                    </div>
                    <input required id="password" type="password" className="form-control" placeholder="********" value={Form.password} onChange={(e)=>CambioInput(e)} />
                </div>
                <label htmlFor="repetpassword" className="TextBody ml-2" >Repetir contraseña:</label>
                <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="repetpasswordIcon"><AiOutlineLock /></span>
                    </div>
                    <input required id="repetPassword" type="password" className="form-control" placeholder="********" value={Form.repetPassword} onChange={(e)=>CambioInput(e)}  />
                </div>

                <button type="submit" className="btn btn-dark btn-block "> REGISTRATE </button>
                <hr />
            </form>
        </>
    )
}
