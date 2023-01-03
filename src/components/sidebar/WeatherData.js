import React from 'react'
import moment from 'moment'
import { DataContext } from "../../App"

import MiniCloud from '../../img/icons/cloud.svg'
import Point from '../../img/icons/point.svg'

export function WeatherData(){
   const ContextData = React.useContext(DataContext)

   return(
      <div className='sidebar-data-full'>
        {ContextData.temp && 
        <div className='sidebar-data'>
            <p className='sidebar-data__degree'>{Math.round(ContextData.temp - 273)}&deg;C</p>
            <p className='sidebar-data__city'>{ContextData.city}</p>
            <div className='sidebar-data__time'>
               <p className='sidebar-data__day'> {moment().format('dddd') + `,`}&nbsp;<p className='sidebar-data__hours'>{moment().format('HH:mm')}</p></p>
               <p className='sidebar-data__timezone'>GMT 
               {ContextData.time > 0 ? 
               " +" +Math.floor((ContextData.time / 3600)).toString().padStart(2, "0") + ":" + (ContextData.time % 3600 / 60).toString().padStart(2, "0") 
               : " -" + (ContextData.time / -3600).toString().padStart(2, "0")}</p>
            </div>
            <div className='sidebar-line'></div>
            <div className='sidebar-data__clouds'>
               <img src={MiniCloud} alt='' className='sidebar-data__mini-cloud sidebar-data--size-mini'/>
               <p>Clouds - {ContextData.clouds} %</p>
            </div>
            <div className='sidebar-data__cloudsFull'>
               <img src={Point} alt='' className='sidebar-data__mini-pointer sidebar-data--size-mini'/>
               <p className='sidebar-data__fullClouds'>{ContextData.weatherFull}</p>
            </div>
        </div>
        }

      </div>
   )
}