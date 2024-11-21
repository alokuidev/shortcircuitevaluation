import { useEffect, useState } from 'react';
import './Weather.css'
const Weather = () => {
    const [city, setCityName] = useState("Thiruvananthapuram"); 

    const [weatherData, setWeatherData] = useState('');
    
    useEffect(() =>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=ef5519f3db8841faada180030242011&q=${city}&aqi=no`)
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.log(err))
     },[city])

    const changeCountry = (e) =>{
        setCityName(e.target.value)
    }
    return(
    <>
    <div className="container">
    {/* <!-- Country Dropdown --> sunny rainy cloudy*/}
    <div className="dropdown">
      <label for="country">Select City:</label>
      <select id="country" onChange={changeCountry}>
        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        <option value="Patna">Patna</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Pune">Pune</option>
        <option value="Theni">Theni</option>
        <option value="Indore">Indore</option>
        <option value="Vadodra">Vadodra</option>
      </select>
    </div>

    
    {weatherData ? (        
    <div className="weather-container">
      {/* <!-- Sunny Weather Card --> */}
      <div className={`weather-card  ${weatherData.current.condition.text === 'Mist' ? 'cloudy' : weatherData.current.condition.text === 'Sunny' ? 'sunny' : 'rainy'}`}>
        <div className="city">{weatherData.location.name}</div>
        <div className="temp">{weatherData.current.temp_c}</div>
        <div className="condition">{weatherData.current.condition.text}</div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )}
  </div>


        </>
    )
}

export default Weather;