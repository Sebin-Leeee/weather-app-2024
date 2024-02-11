import React from "react";
import styles from "./weatherDisplay.module.css";

interface WeatherDisplayProps {
  currentWeather: {
    lastUpdated: string;
    temperature: number;
    weatherMain: string;
    windSpeed: number;
  };
  forecast: {
    temp: number;
    weatherMain: string;
    weatherDescription: string;
    windSpeed: number;
    dtTxt: string;
  }[];
  cityName: string;
}

const getWeatherImage = (weatherMain: string, weatherDescription: string) => {
  const lowerCaseWeatherMain = weatherMain.toLowerCase();
  const lowerCaseWeatherDescription = weatherDescription.toLowerCase();

  if (lowerCaseWeatherMain === "rain") {
    return "/rain.png";
  } else if (lowerCaseWeatherMain === "clear") {
    return "/clear.png";
  } else if (
    lowerCaseWeatherMain === "clouds" &&
    lowerCaseWeatherDescription.includes("few")
  ) {
    return "/few_clouds.png";
  } else if (lowerCaseWeatherMain === "clouds") {
    return "/cloud.png";
  } else {
    return "/clear.png";
  }
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  currentWeather,
  forecast,
  cityName,
}) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.innerFlexContainer}>
        <div>
          <h2
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >{`${cityName}`}</h2>
          <p
            style={{
              textAlign: "left",
            }}
          >
            Last Updated: {currentWeather.lastUpdated}
          </p>
        </div>

        <div className="p-4">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            {" "}
            {currentWeather.weatherMain}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "bigger",
            }}
          >
            Temperature: {currentWeather.temperature.toFixed(1)}°C
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "bigger",
            }}
          >
            {" "}
            Wind Speed: {currentWeather.windSpeed} m/s
          </p>
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: "bigger",
            marginBottom: 15,
            textAlign: "center",
          }}
        >
          5-Day Forecast
        </p>
        <div className={styles.weatherBoxContainer}>
          {forecast.map((day) => (
            <div className={styles.box} key={day.dtTxt}>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                  {new Date(day.dtTxt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {day.temp.toFixed(1)}°C
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {day.weatherMain}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={getWeatherImage(day.weatherMain, day.weatherDescription)}
                  alt={`Weather: ${day.weatherMain}`}
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <p>Detail: {day.weatherDescription}</p>
                <p>Wind Speed: {day.windSpeed} m/s</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
