import React, { useEffect, useState } from 'react'
import searchImg from '../../img/search.svg'
import { Loader } from '../Loader'

export function SearchInput({onData}){
    let data = {
        city: '',
        clouds: '',
        temp: '',
        maxTemp: '',
        minTemp: '',
        pressure: '',
        humidity: '',
        weather: '',
        weatherFull: '',
        wind: '',
        sunrise: '',
        sunset: '',
        lat: '',
        lon: '',
        time: 0,
        tempFlag: 'cel',
        weekForecast: [
            
        ]
    }
    const [input, SetInput] = useState('Moscow');
    const [load, setLoad] = useState(false);
    
    function inputChangeHandler(event){
        SetInput(event.target.value);
    }
    async function fetchData(){
        let urlForCoord = "https://api.openweathermap.org/geo/1.0/direct?q=" + input + "&appid=" + "8c7fb2b547052b3c31f1e1993bf05fa7"
        setLoad(true);
        await fetch(urlForCoord)
        .then(res => res.json())
        .then((res)=>{
            let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + res[0].lat + "&lon=" + res[0].lon + "&appid=" + "8c7fb2b547052b3c31f1e1993bf05fa7" 
            fetch(url)
            .then(res => res.json())
            .then(res => {
                data.city = res.name;
                data.clouds = res.clouds.all;
                data.temp = res.main.temp;
                data.maxTemp = res.main.temp_max - 273;
                data.minTemp =  res.main.temp_min - 273;
                data.pressure = res.main.pressure;
                data.humidity = res.main.humidity;
                data.weather = res.weather[0].main;
                data.weatherFull = res.weather[0].description;
                data.wind = res.wind.speed;
                data.sunrise = res.sys.sunrise;
                data.sunset = res.sys.sunset;
                data.lat = res.coord.lat;
                data.lon = res.coord.lon;
                data.time = res.timezone;
                onData(data);
            })
            .then(() =>{
                let urlForWeekForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + res[0].lat + "&lon=" + res[0].lon + "&appid=" + "8c7fb2b547052b3c31f1e1993bf05fa7";
                fetch(urlForWeekForecast)
                
                .then(res => res.json())

                .then((data)=>{
                    sortWeekForecast(data.list)
                })
                
            })
        })
        .catch(err => console.log(err))  
        setLoad(false)
    }
    function onPressHandler(event){
        if(event.keyCode === 13) {
            fetchData()
        }
    }
    function sortWeekForecast(array){
        array.forEach((elem, index) =>{
            if (index < 5){
                const stamp = {
                    weekDay: elem.dt,
                    weatherDescription: elem.weather[0].description,
                    maxTemp: elem.main.temp_max,
                    minTemp: elem.main.temp_min
                }
                data.weekForecast.push(stamp)
            }
            
        })
        console.log(data);
    }
    useEffect(() =>{
        fetchData();
    }, []);
    return(
        <div className="sidebar__search-input-container">
            {load && <Loader />}
            <div className="sidebar__search-input">
                <input type='text' className="" placeholder="search for places..." onChange={inputChangeHandler} onKeyUp={onPressHandler}/>
                <button type="button" className="sidebar__search-button" onClick={fetchData}>
                    <img src={searchImg} alt="search" className=''/>
                </button>
            </div>
        </div>    
   )
}