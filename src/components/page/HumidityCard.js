import React from 'react'
import { DataContext } from './../../App'

export function HumidityCard(props){
    const ContextData = React.useContext(DataContext);

    function humidityHeight(){
        let height = Math.round(((ContextData.humidity) / 100) * 90);
        return height;
    }
    let style = {
        height: humidityHeight() + "px"
    }

    let humidityState = 'Very dry air';
    if (ContextData.humidity > 85){
        humidityState = 'Very humid air';
    } else if(ContextData.humidity > 70 && ContextData.humidity <= 85){
        humidityState = 'Moderately humid air';
    } else if(ContextData.humidity > 55 && ContextData.humidity <= 70){
        humidityState = 'Moderately dry air';
    }else if(ContextData.humidity > 30 && ContextData.humidity <= 55){
        humidityState = 'Dry air';
    }
    return(
        <div className='page-humidity page-card'>
            <h2 className='page-humidity__title page-card--title'>Humidity</h2>
            <div className='humidity-container'>
                <div className='page-humidity-info'>
                    <p className='page-humidity-result'>{ContextData.humidity}<sup> %</sup></p>
                    <p className='page-humidity-state'>{humidityState}</p>
                </div>
                <div className='page-humidity-bar'>
                    <div className="page-humidity-inner-bar" style={style}></div>
                </div>
            </div>
        </div>
   )
}