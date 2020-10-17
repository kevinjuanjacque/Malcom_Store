import React from 'react';
import '../../Styles/timer.css';

export const Timer = ({hours,minutes,seconds}) => {
    return (
        <>
            <div className="form-inline ">

                <div id="hours" className="block shadow">
                    { (hours<10) ? `0${hours.toString()}` : hours.toString() }
                </div>
                    <h1 className="mt-2 ">:</h1>
            
                <div id="minutes" className="block shadow ">
                    { (minutes<10) ? `0${minutes.toString()}` : minutes.toString() }
                </div> 
                    <h1 className="mt-2 ">:</h1> 
                
                    <div id="seconds" className=" shadow block ">
                        { (seconds<10) ? `0${seconds.toString()}` : seconds.toString() }
                    </div>
                    
                

            </div>
        </>
    )
}
