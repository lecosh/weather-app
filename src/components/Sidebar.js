import React from 'react'
import { SearchInput } from './sidebar/SearchInput'
import { WeatherImage } from './sidebar/WeatherImage'
import { WeatherData } from './sidebar/WeatherData';

export function Sidebar({onData}){
    function dataHandler(value){
      onData(value);
    }
    return(
      <div className='sidebar'>
          <SearchInput 
            onData={dataHandler}
          />
          <WeatherImage />
          <WeatherData />
      </div>
   )
}   