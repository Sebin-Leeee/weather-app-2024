import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "../components/Search/weatherSearch";
import WeatherDisplay from "../components/Display/weatherDisplay";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityName, setCityName] = useState<string>("");

  const fetchWeatherData = async (location: string) => {
    try {
      const geocodingResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b6e00456ca5c42947006764fc8f28b79`
      );

      if (geocodingResponse.data.length === 0) {
        console.error("Geocoding API did not return any results.");
        return;
      }

      const { lat, lon, name } = geocodingResponse.data[0];
      setCityName(name);

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6e00456ca5c42947006764fc8f28b79`
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b6e00456ca5c42947006764fc8f28b79`
      );

      const currentWeather = {
        lastUpdated: new Date(
          weatherResponse.data.dt * 1000
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        temperature: weatherResponse.data.main.temp - 273.15,
        weatherMain: weatherResponse.data.weather[0].main,
        windSpeed: weatherResponse.data.wind.speed,
      };

      const forecast = forecastResponse.data.list.reduce(
        (acc: any, day: any) => {
          const date = day.dt_txt.split(" ")[0];
          if (!acc[date] && Object.keys(acc).length < 5) {
            acc[date] = {
              temp: day.main.temp - 273.15,
              weatherMain: day.weather[0].main,
              weatherDescription: day.weather[0].description,
              windSpeed: day.wind.speed,
              dtTxt: day.dt_txt,
            };
          }
          return acc;
        },
        {}
      );

      const forecastArray = Object.values(forecast);

      setWeatherData({
        current: currentWeather,
        forecast: forecastArray,
      });
      setShowInstructions(false);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleImageClick = () => {
    setShowInstructions(true);
    setWeatherData(null);
    setCityName("");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`flex items-center relative`} onClick={handleImageClick}>
          <img src={"/Logo.png"} alt="Logo" className={`max-h-12 mr-3`} />{" "}
          <span className={`text-lg`}>WEATHERMATE</span>{" "}
        </div>
        <WeatherSearch onSubmit={fetchWeatherData} />
      </header>

      <main className={styles.main}>
        {showInstructions && (
          <div className={styles.instrunction}>
            <img src={"/Logo.png"} alt="Logo" className={styles.image} />{" "}
            <p><span className={styles.bold}>Welcome to WEATHERMATE!</span> <br/>Enter a city to get weather information.</p>
            <p>You can get the city's current weather and 5-day forecast!</p>
          </div>
        )}
        {weatherData && !showInstructions && (
          <WeatherDisplay
            currentWeather={weatherData.current}
            forecast={weatherData.forecast}
            cityName={cityName}
          />
        )}
      </main>
      <footer className={styles.footer}>© 2024 Sebin Lee</footer>
    </>
  );
};

export default Home;
