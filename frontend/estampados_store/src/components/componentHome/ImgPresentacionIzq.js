import React from 'react';
import {AiOutlineInstagram,} from 'react-icons/ai';
export const ImgPresentacionIzq = () => {
    return (
        <div className="row ">
            <div className="col ">
                    <img className="ImagePortada" src="https://i.pinimg.com/564x/72/68/8a/72688a60d7b84890ee6c1d4ddd7db9c8.jpg" alt="imgref" ></img>
            </div>
            <div className="col-8 ml-5 " >
                <div className="">
                <h1 className="TitleModa"> Diseñamos tú polera</h1>
                <hr/>
                <p className="TextBody">Estampados de calidad, poleras para regalo. Solo contactanos, 
                dejanos tu imagen y retira o solicita tu envio para la recepcion de tu polera.
                <br/>
                Tambien, podras elegir el color de tu polera, o escoger algunos de nusestros diseños 
                creados, los cuales podras ver en nuestro instagram <strong><AiOutlineInstagram size="30"/>Malcom_Store.</strong>
                </p>
            
                </div>
                </div>  
        </div>
    )
}
