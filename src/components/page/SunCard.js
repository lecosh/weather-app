import React from 'react'
import Sunrise from '../../img/icons/sunrise.png'
import Sunset from '../../img/icons/sunset.png'
import moment from 'moment'
import { DataContext } from './../../App'

export function SunCard(props){    
    const ContextData = React.useContext(DataContext);
    return(
    <div className='page-sunset page-card'>
        <h2 className='page-sun-title '>Sunrise &amp; Sunset</h2>
        <div className='page-sunrise page-sunrise-flex'>
            <img src={Sunrise} alt='' className='page-sun-img'/>
            <p className='page-sun-time text-2xl'>{moment.unix(ContextData.sunrise).format("HH:mm")}</p>
        </div>
        <div className='page-sunset page-sunrise-flex'>
            <img src={Sunset} alt='' className='page-sun-img'/>
            <p className='page-sun-time text-2xl'>{moment.unix(ContextData.sunset).format("HH:mm")}</p>
        </div>
    </div>
   )
}