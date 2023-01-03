import React from 'react'
import { DayWeekToggler } from './DayWeekToggler'
import { HumidityCard } from './HumidityCard'
import { SunCard } from './SunCard'
import { TemperatureCard } from './TemperatureCard'
import { WindCard } from './WindCard'
import { Map } from './Map'

export function WeatherInfo(props){
    return(
    <div className=''>
        <h1 className='page-title'>Today's Highlights</h1>
        <div className='page-all-data'>
            <DayWeekToggler />
            <HumidityCard />
            <TemperatureCard />
            <SunCard />
            <WindCard />
            <Map />
        </div>
    
    </div>
    )
    
}