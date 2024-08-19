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
        <div className="flex items-center justify-center text-white min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-4xl font-bold mb-8">Weather App</h1>
                <div className="flex justify-center items-center flex-col mb-8">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                        className="px-4 py-2 mb-4 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        onClick={getWeather}
                        className="px-6 py-2 bg-red-700 hover:bg-red-800 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Get Weather
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {weatherData && (
                    <div className="weather-info bg-white text-gray-900 rounded-lg p-6 shadow-lg border-4 border-blue-500">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
                            <p className="text-lg font-semibold mb-4">
                                {weatherData.weather[0].description.charAt(0).toUpperCase() +
                                    weatherData.weather[0].description.slice(1)}
                            </p>
                            <div className="flex justify-center items-center">
                                <div className="bg-blue-500 text-white rounded-full h-15 w-35 flex items-center justify-center text-2xl font-bold mr-4">
                                    {weatherData.main.temp}°C
                                </div>
                                <div className="text-left">
                                    <p className="mb-2">
                                        <span className="font-semibold">Humidity:</span> {weatherData.main.humidity}%
                                    </p>
                                    <p>
                                        <span className="font-semibold">Wind Speed:</span> {weatherData.wind.speed} m/s
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
