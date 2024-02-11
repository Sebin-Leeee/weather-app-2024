import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "../components/Search/weatherSearch";
import WeatherDisplay from "../components/Display/weatherDisplay";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Instruction from "@/components/Instruction";

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

  return (
    <>
      <main className={styles.main}>
        <Header />
        <WeatherSearch onSubmit={fetchWeatherData} />
        {showInstructions && <Instruction />}
        <div className={styles.display}>
          {weatherData && !showInstructions && (
            <WeatherDisplay
              currentWeather={weatherData.current}
              forecast={weatherData.forecast}
              cityName={cityName}
            />
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
