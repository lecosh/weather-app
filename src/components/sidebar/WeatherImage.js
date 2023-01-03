import React from 'react'
import DefaultWeather from '../../img/icons/defualt.svg'
import { DataContext } from '../../App'
export function WeatherImage(){
   
   const ContextData = React.useContext(DataContext)

   function setWeather(props){
      const weatherImages = [
         {
            name: 'Clear',
            link: 'sun.svg'
         },
         {
            name: 'Clouds',
            link: 'clouds.svg' 
         },
         {
            name: 'Rain',
            link: 'rain.svg' 
         },
         {
            name: 'Drizzle',
            link: 'thunderstorm256.png.svg' 
         },
         {
            name: 'Mist',
            link: '001lighticons-13.svg'
         },
         {
            name: 'Thunderstorm',
            link: '001lighticons-16.svg'
         },
         {
            name: 'Fog',
            link: '001lighticons-13.svg'
         },
         {
            name: 'Snow', 
            link: '001lighticons-21.svg'
         },
         {
            name: 'Haze', 
            link: '001lighticons-12.svg'
         }
         
      ]
      let index = weatherImages.findIndex(el =>{
         return el.name === ContextData.weather;
      })
      return weatherImages[index].link;
   }
   return(
      <div className='sidebar-image'>
         {ContextData.weather && <img src={require(`../../img/icons/` + setWeather())} alt='' className='sidebar-weather-image' />}
         {ContextData.weather === undefined && <img src={DefaultWeather} alt='' className='sidebar-weather-image--default'/>}
      </div>
   )
}