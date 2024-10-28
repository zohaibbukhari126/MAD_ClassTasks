
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import openweather from '../api/openweather';
import SearchBar from '../components/SearchBar';

export default function WeatherSearchScreen() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = () => {
        openweather.get('/weather', {
            params: {
                q: city,
                units: 'metric', 
            }
        })
        .then(response => {
            setWeather(response.data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter City Name:</Text>
            
            <SearchBar
                term={city}
                onTermChange={setCity}
                onTermSubmit={fetchWeather}
                PlaceHolderS="City Name"
            />

            <Button title="Get Weather" onPress={fetchWeather} />
            {weather && (
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
                    <Text style={styles.weatherText}>Feels Like: {weather.main.feels_like}°C</Text>
                    <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    weatherContainer: {
        marginTop: 20,
    },
    weatherText: {
        fontSize: 18,
        marginVertical: 4,
    },
});
