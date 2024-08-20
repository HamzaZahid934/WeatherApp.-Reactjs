import React, { useState } from 'react';

const apiKey = "98df89ab6167f1807ca550c8f7e412fe";

const Weatherpage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const getWeather = async () => {
        if (city === "") {
            setError("Please enter a city name.");
            setWeatherData(null);
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === "404") {
                setError("City not found.");
                setWeatherData(null);
            } else {
                setWeatherData(data);
                setError("");
            }
        } catch (error) {
            setError("Error fetching weather data.");
            console.error(error);
        }
    };

    return (
        <div >
            <div >
                <h1 >Weather App</h1>
                <div >
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"

                    />
                    <button
                        onClick={getWeather}
                    >
                        Get Weather
                    </button>
                </div>
                {error && <p >{error}</p>}
                {weatherData && (
                    <div>
                        <div >
                            <h2>{weatherData.name}</h2>
                            <p >
                                {weatherData.weather[0].description.charAt(0).toUpperCase() +
                                    weatherData.weather[0].description.slice(1)}
                            </p>
                            <div >
                                <div >
                                    {weatherData.main.temp}°C
                                </div>
                                <div>
                                    <p >
                                        <span>Humidity:</span> {weatherData.main.humidity}%
                                    </p>
                                    <p>
                                        <span >Wind Speed:</span> {weatherData.wind.speed} m/s
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weatherpage;
