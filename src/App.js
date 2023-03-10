import { useEffect, useState } from "react";
import { MainWeather } from "./Layouts/MainLayout";
//import { SearchBar } from "./Components/SearchBar.jsx";

const api_key = '4ee0516bba72b08b1aa94054e4c0a6a0';
let urlCity = 'New York';

let url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=${urlCity}`;

export const App = () => {

  const [weatherData, setWeatherData] = useState({ });
  const [weatherStatus, setWeatherStatus] = useState();
  //const [cityName, setCityName] = useState("");

  // const getCityName = async (city) => {
  //   setCityName(city)
 
  //   url = url + urlCity + city;

  useEffect(() => {
    const apiFetch = async () => {

      try {
        const response = await fetch(url)
        const apiData = await response.json()
        console.log(apiData)
        setWeatherData(apiData)
        setWeatherStatus(apiData.weather[0].icon)
      } catch (error) {
        console.log(error)
      }
    }
      apiFetch();
  }, []);

  return(
    <>
      <MainWeather weatherData={weatherData} weatherStatus={weatherStatus}/>
    </>
  )
    }