import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { PiWindFill } from "react-icons/pi"
import { WiHumidity } from "react-icons/wi"

const Weather = () => {
    const [city, setCity] = useState("alger")
    const [weatherData, setWeatherData] = useState({})
    const searchCity = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ebdbd28b571dc7dc953b3c9e3af0fe1`
            const response = await fetch(url)
            const data = await response.json() // Add await here
            setWeatherData({
                humidity: data.main.humidity,
                temp: data.main.temp,
                wind: data.wind.speed,
                name : data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            })
            console.log(data);
            console.log(weatherData);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        searchCity()
    },[])

    return (
        <div className='p-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className="flex justify-center items-center gap-6 mb-4">
                <input 
                    type="search" 
                    placeholder='Search for a city' 
                    className='border-none rounded-lg p-2 capitalize outline-none' 
                    onChange={e => setCity(e.target.value)} 
                />
                <span 
                    className='bg-slate-200 p-3 rounded-3xl cursor-pointer hover:bg-slate-500 ease-in duration-300' 
                    onClick={searchCity}
                > 
                    <FaSearch/>
                </span>
            </div> 
            <center className="">
                <img src={weatherData.icon} alt="weather image" className='w-28' />
            </center>
            <div className="text-center my-5 text-white">
                <p className="font-bold mb-2 text-3xl uppercase">{weatherData.temp}<span className='text-4xl'>°</span></p>
                <p className="uppercase font-bold text-xl">{weatherData.name}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className='text-white'>
                    <WiHumidity className='text-5xl'/>
                    <p>{weatherData.humidity}%</p>
                    <p>humidity</p>
                </div>
                <div className='text-white'>
                    <PiWindFill className='text-5xl '/>
                    <p>{weatherData.wind} km/h</p>
                    <h2 className=''>wind speed</h2>
                </div>
            </div>
        </div>
    )
}

export default Weather
