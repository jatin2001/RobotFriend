import React from 'react';
import NFlogo from './nothingFound.png';


function NotFound(props)
{
    return(
        <div className='tc mt4'>
        <img src={NFlogo} alt="NotFound"/>
        </div>
    )
}

export default NotFound; 