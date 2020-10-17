import React, {  useState } from 'react';
import { ImgPresentacionDer } from '../components/componentHome/ImgPresentacionDer';
import { ImgPresentacionIzq } from '../components/componentHome/ImgPresentacionIzq';
import { Timer } from '../components/componentHome/Timer';
import {obtenerFecha}  from '../helpers/obtenerFecha';

export const Home = () => {
    const [Fecha, setFecha] = useState( 
        obtenerFecha()
    );
    
    setInterval(() => {
        
        setFecha(obtenerFecha());

    }, 1000);

    return (
        <div className="mb-5 ml-3 mt-3 mr-2">
            <div className="card">
                <ImgPresentacionIzq />
                <hr/>
                <ImgPresentacionDer />


            </div>
            <div className="mt-5">
                
                <div className="row">
                        
                    <div className="col mr-auto mt-2">
                        <h1> OFERTAS DEL DÍA</h1>
                    </div>
                    <div className="col d-flex">
                            <span className="ml-auto textSubTitle mt-2 mr-3">Finaliza en</span>
                            <Timer hours={Fecha.hours} minutes={Fecha.minutes} seconds={Fecha.seconds} />
                    </div>

                </div>

            </div>
        </div>
    )
}
