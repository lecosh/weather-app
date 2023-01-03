import React from 'react'
import { DataContext } from './../../App'

export function WindCard(props){
    const ContextData = React.useContext(DataContext);
    let windState = 'Calm'
    if(ContextData.wind > 32){
        windState = 'Hurricane';
    } else if(ContextData.wind <= 32 && ContextData.wind > 20){
        windState = 'Storm';
    } else if(ContextData.wind <= 20 && ContextData.wind > 11){
        windState = 'Strong';
    } else if(ContextData.wind <= 11 && ContextData.wind > 8){
        windState = 'Fresh';
    } else if(ContextData.wind <= 8 && ContextData.wind > 6){
        windState = 'Moderate';
    } else if(ContextData.wind <= 6 && ContextData.wind > 3){
        windState = 'Weak';
    } else if(ContextData.wind <= 3 && ContextData.wind > 1){
        windState = 'Easy';
    }

    return(
    <div className='page-wind page-card'>
        <h2 className='page-wind-title'>Wind Status</h2>
        <div className='page-wind-data'>
            <p className='page-wind-speed'>{ContextData.wind} &zwj; </p>
            <span>  km/h</span>
        </div>
        <p className='page-wind-status'>{windState}</p>
    </div>
   )
}