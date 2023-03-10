import React from "react";
import './main_layout.css';

export const MainWeather = ({weatherData, weatherStatus}) => {
    //console.log(weatherData)
    const temp = Math.round(weatherData?.main?.temp - 273)
    const tempMax = Math.round(weatherData?.main?.temp_max - 273)
    const tempMin = Math.round(weatherData?.main?.temp_min - 273)

      const imageUrl = `https://openweathermap.org/img/wn/${weatherStatus}.png`;

    return(
        <div className="AppContainer">
            {weatherData && (
              <div className="WeatherInfoContainer">
                  <div className="WeatherInfoContainer__Data">
                  <h1>{weatherData?.name}</h1>
                    <div className="WeatherInfoContainer__DataHeader">
                      <span className="Temperature">{temp}°</span>
                      {weatherData?.weather && <h2>{weatherData?.weather[0]?.main}</h2>}
                      </div>
                      <div className="WeatherStatusImage">
                        <img src={imageUrl}  alt="weather icon" />
                      </div>
                      <div className="WeatherInfoContainer__TempData">
                          <span className="TemperatureMax">Max: {tempMax}°</span>
                          <span className="TemperatureMin">Min: {tempMin}°</span>
                      </div>
                  </div>
              </div>
            )}
        </div>
    )
}