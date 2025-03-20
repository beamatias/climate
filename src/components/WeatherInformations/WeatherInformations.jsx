import './WeatherInformations.css'

function WeatherInformations({ weather }) {

    return (
        <div className='weather-container'>
            <h2 className='city-name'>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
        
            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p><span>Sensação térmica:</span> {Math.round(weather.main.feels_like)}°C</p>
                <p><span>Umidade:</span> {weather.main.humidity}%</p>
                <p><span>Pressão:</span> {weather.main.pressure}</p>

            </div>
        </div>
    )
}

export default WeatherInformations;