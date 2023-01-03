import React from 'react'
import HighTemp from '../../img/icons/high-temperature.svg'
import LowTemp from '../../img/icons/low-temperature.svg'
import farImg from '../../img/far.png'
import celImg from '../../img/cel.svg'
import { DataContext } from './../../App'

export function TemperatureCard(props){
    const ContextData = React.useContext(DataContext);
    React.useEffect(() =>{
        setMin(ContextData.minTemp)
    }, [ContextData.minTemp]);
    React.useEffect(() =>{
        setMax(ContextData.maxTemp)
    }, [ContextData.maxTemp]);
    const [min, setMin] = React.useState(ContextData.minTemp);
    const [max, setMax] = React.useState(ContextData.maxTemp);
    const [tempFlag, setTempFlag] = React.useState("cel");
    

    function toggleFar(){
        if (tempFlag === "cel"){
            setMax(max + 32);
            setMin(min + 32);
            setTempFlag("far");
        }
    }
    function toggleCel(){
        if (tempFlag === "far"){
            setMax(max - 32);
            setMin(min - 32);
            setTempFlag("cel");
        }
    }

    return(
        <div>
            <div className='page-temperature page-card'>
                <h2 className='page-temp-title page-card--title'>Min &amp; Max Temp</h2>
                <div className='page-min-temp page-min-temp--first'>
                    <img src={LowTemp} alt='' className='page-temp-min'/>
                    <p className='page-temp'>{Math.round(min)}&deg;</p>
                </div>
                <div className='page-min-temp'>
                    <img src={HighTemp} alt='' className='page-temp-max'/>
                    <p className='page-temp'>{Math.round(max)}&deg;</p>
                </div> 
            </div>
            <div className='degree-toggler'>
                <button className='degree-toggler__farenheit-btn degree-toggler-btn' onClick={toggleFar}>
                    <img src={farImg} alt='' className='degree-toggler-img'/>
                </button>
                <button className='degree-toggler__farenheit-btn degree-toggler-btn' onClick={toggleCel}>
                    <img src={celImg} alt='' className='degree-toggler-img cel-img'/>
                </button>
            </div>
        </div>  
   )
}