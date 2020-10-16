import React from 'react';
import {AiOutlineInstagram, AiOutlineFacebook,AiFillTwitterCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>

            <div className="row row-cols-6">
                
                <div className="col-3">
                    <p className="font-weight-bold">
                        Redes sociales
                    </p>
                    
                    <div className="row">

                        <div className="col mt-2 ">
                            <Link to="http://www.instagram.com/psn_plus_cl/"><AiOutlineInstagram  size="40"/></Link>
        
                        </div>
                        <div className="col mt-2">
                            <AiOutlineFacebook  size="40"/>
        
                        </div>
                        <div className="col mt-2">
                            <AiFillTwitterCircle  size="40"/>
        
                        </div>

                    </div>
                </div>
                <div className="col-8">
                <address>
                    <p className="font-weight-bold">
                        Sobre nostros &reg;
                    </p>
                    
                    <strong>Malcom Store, LTD.</strong>
                    <br/>
                    <abbr title="Phone">Telefono:</abbr> (+569)92929292
                
                </address>

                <address>
                    <strong>Kevin Juan Jacque Castillo CEO.</strong>
                    <br/>
                    <Link to="mailto:first.last@example.com">malcom.store@gmail.com</Link>
                </address>
  
                </div>

            </div>
        </footer>
    )
}
