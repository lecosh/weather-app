import React from 'react'
import {WeatherInfo} from './page/WeatherInfo'

export function Page(props){

   return(
      <div className='page'>
            {props.data.weather && <WeatherInfo />}
           
      </div>
   )
}